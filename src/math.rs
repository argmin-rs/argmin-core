// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! # Math
//!
//! Mathematics related traits which some solvers require. This provides an abstraction over
//! different types of parameter vectors. The idea is, that it does not matter whether you would
//! like to use simple `Vec`s, `ndarray`, `nalgebra` or custom defined types: As long as the traits
//! required by the solver are implemented, you should be fine. In this module several of these
//! traits are defined and implemented. These will be extended as needed. They are also already
//! implemented for basic `Vec`s, and will in the future also be implemented for types defined by
//! `ndarray` and `nalgebra`.

#[cfg(feature = "ndarrayl")]
use crate::errors::ArgminError;
#[cfg(feature = "ndarrayl")]
use ndarray;
#[cfg(feature = "ndarrayl")]
use ndarray_linalg::Inverse;
use Error;

pub trait ArgminMul<T, U> {
    fn amul(&self, T) -> U;
}

impl ArgminMul<f64, Vec<f64>> for Vec<f64> {
    fn amul(&self, f: f64) -> Vec<f64> {
        self.iter().map(|x| f * x).collect::<Vec<f64>>()
    }
}

impl<F, T, U> ArgminMul<T, U> for F
where
    F: ArgminDot<T, U>,
{
    fn amul(&self, f: T) -> U {
        self.dot(f)
    }
}

#[cfg(feature = "ndarrayl")]
fn swap_columns<T>(
    mat: &mut ndarray::Array2<T>,
    idx1: usize,
    idx2: usize,
) -> &mut ndarray::Array2<T>
where
    ndarray::OwnedRepr<T>: ndarray::Data,
{
    let s = mat.raw_dim();
    for i in 0..s[0] {
        mat.swap((i, idx1), (i, idx2));
    }
    mat
}

#[cfg(feature = "ndarrayl")]
fn swap_rows<T>(mat: &mut ndarray::Array2<T>, idx1: usize, idx2: usize) -> &mut ndarray::Array2<T>
where
    ndarray::OwnedRepr<T>: ndarray::Data,
{
    let s = mat.raw_dim();
    for i in 0..s[1] {
        mat.swap((idx1, i), (idx2, i));
    }
    mat
}

pub trait ModifiedCholesky
where
    Self: Sized,
{
    fn modified_cholesky(&self, delta: f64, beta: f64) -> Result<Self, Error>;
}

#[cfg(feature = "ndarrayl")]
impl ModifiedCholesky for ndarray::Array2<f64> {
    /// Algorithm 6.5 in "Numerical Optimization" by Nocedal and Wright
    fn modified_cholesky(&self, delta: f64, beta: f64) -> Result<ndarray::Array2<f64>, Error> {
        use ndarray::s;
        if delta <= 0.0 {
            return Err(ArgminError::InvalidParameter {
                text: "modified_cholesky: delta must be > 0.0.".to_string(),
            }
            .into());
        }
        if beta <= 0.0 {
            return Err(ArgminError::InvalidParameter {
                text: "modified_cholesky: beta must be > 0.0.".to_string(),
            }
            .into());
        }
        let mut c: ndarray::Array2<f64> = ndarray::Array2::zeros(self.raw_dim());
        let a_diag = self.diag();
        c.diag_mut().assign(&a_diag);
        debug_assert!(self.is_square());
        let n = self.raw_dim()[0];
        let mut l: ndarray::Array2<f64> = ndarray::Array::zeros((n, n));
        let d: ndarray::Array1<f64> = ndarray::Array::zeros(n);
        for j in 0..(n - 1) {
            if j > 0 {
                l.slice_mut(s![j, 0..(j - 1)])
                    .assign(&(&c.slice(s![j, 0..(j - 1)]) / d[j]));
            }
            unimplemented!()
        }
        Ok(l)
    }
}

/// Dot/scalar product of `T` and `self`
pub trait ArgminDot<T, U> {
    /// Dot/scalar product of `T` and `self`
    fn dot(&self, T) -> U;
}

/// Dot/scalar product of `T` and `self` weighted by W (p^TWv)
pub trait ArgminWeightedDot<T, U, V> {
    /// Dot/scalar product of `T` and `self`
    fn weighted_dot(&self, V, T) -> U;
}

/// TEMPORARY: only for testing!
impl ArgminWeightedDot<Vec<f64>, f64, Vec<Vec<f64>>> for Vec<f64> {
    fn weighted_dot(&self, w: Vec<Vec<f64>>, v: Vec<f64>) -> f64 {
        self.dot(w.iter().map(|x| v.dot(x)).collect::<Vec<f64>>())
    }
}

#[cfg(feature = "ndarrayl")]
impl ArgminWeightedDot<ndarray::Array1<f64>, f64, ndarray::Array2<f64>> for ndarray::Array1<f64> {
    fn weighted_dot(&self, w: ndarray::Array2<f64>, v: ndarray::Array1<f64>) -> f64 {
        self.dot(&w.dot(&v))
    }
}

/// Return param vector of all zeros (for now, this is a hack. It should be done better)
pub trait ArgminZero {
    /// Return param vector of all zeros
    fn zero(&self) -> Self;
}

impl ArgminZero for Vec<f64> {
    fn zero(&self) -> Vec<f64> {
        self.iter().map(|_| 0.0).collect::<Self>()
    }
}

#[cfg(feature = "ndarrayl")]
impl ArgminZero for ndarray::Array1<f64> {
    fn zero(&self) -> ndarray::Array1<f64> {
        self.iter().map(|_| 0.0).collect::<Self>()
    }
}

/// Add a `T` to `self`
pub trait ArgminAdd<T> {
    /// Add a `T` to `self`
    fn add(&self, T) -> Self;
}

// would be great if this worked
// impl<T: std::ops::Add<Output = Self> + Clone> ArgminAdd<T> for T {
//     fn add(&self, other: T) -> T {
//         // is this smart?
//         (*self).clone() + other
//     }
// }

/// Subtract a `T` from `self`
pub trait ArgminSub<T> {
    /// Subtract a `T` from `self`
    fn sub(&self, T) -> Self;
}

// would be great if this worked
// impl<T, U> ArgminSub<T> for U
// where
//     T: std::ops::Sub<Output = T> + Clone,
//     U: std::ops::Sub<Output = T> + Clone,
// {
//     default fn sub(&self, other: T) -> Self {
//         // is this smart?
//         ((*self).clone()) - (other)
//     }
// }

/// Add a `T` scaled by an `U` to `self`
pub trait ArgminScaledAdd<T, U> {
    /// Add a `T` scaled by an `U` to `self`
    fn scaled_add(&self, U, T) -> Self;
}

/// Subtract a `T` scaled by an `U` from `self`
pub trait ArgminScaledSub<T, U> {
    /// Subtract a `T` scaled by an `U` from `self`
    fn scaled_sub(&self, U, T) -> Self;
}

/// Scale `self` by a `U`
pub trait ArgminScale<U> {
    /// Scale `self` by a `U`
    fn scale(&self, U) -> Self;
}

/// Compute the l2-norm (`U`) of `self`
pub trait ArgminNorm<U> {
    /// Compute the l2-norm (`U`) of `self`
    fn norm(&self) -> U;
}

/// Compute the inverse (`T`) of `self`
pub trait ArgminInv<T> {
    fn ainv(&self) -> Result<T, Error>;
}

// impl<'a, T> ArgminInv for T where T: Inverse {}

// impl<'a, T> ArgminInv<T> for T
// where
//     T: Inverse,
// {
//     default fn ainv(&self) -> Result<T, Error> {
//         // Stupid error types...
//         Ok(self.inv()?)
//     }
// }
//
/// Implement a subset of the mathematics traits
macro_rules! make_math {
    ($t:ty, $u:ty, $v:ty) => {
        impl<'a> ArgminDot<$t, $u> for $v {
            fn dot(&self, other: $t) -> $u {
                self.iter().zip(other.iter()).map(|(a, b)| a * b).sum()
            }
        }

        impl<'a> ArgminAdd<$t> for $v {
            fn add(&self, other: $t) -> $v {
                self.iter().zip(other.iter()).map(|(a, b)| a + b).collect()
            }
        }

        impl<'a> ArgminSub<$t> for $v {
            fn sub(&self, other: $t) -> $v {
                self.iter().zip(other.iter()).map(|(a, b)| a - b).collect()
            }
        }

        impl<'a> ArgminScaledAdd<$t, $u> for $v {
            fn scaled_add(&self, scale: $u, other: $t) -> $v {
                self.iter()
                    .zip(other.iter())
                    .map(|(a, b)| a + scale * b)
                    .collect()
            }
        }

        impl<'a> ArgminScaledSub<$t, $u> for $v {
            fn scaled_sub(&self, scale: $u, other: $t) -> $v {
                self.iter()
                    .zip(other.iter())
                    .map(|(a, b)| a - scale * b)
                    .collect()
            }
        }
    };
}

/// Implement another subset of the mathematics traits
macro_rules! make_math2 {
    ($u:ty, $v:ty) => {
        impl<'a> ArgminScale<$u> for $v {
            fn scale(&self, scale: $u) -> $v {
                self.iter().map(|a| scale * a).collect()
            }
        }
    };
}

/// Implement yet another subset of the mathematics traits
macro_rules! make_math3 {
    ($u:ty, $v:ty) => {
        impl<'a> ArgminNorm<$u> for $v {
            fn norm(&self) -> $u {
                self.iter().map(|a| a.powi(2)).sum::<$u>().sqrt()
            }
        }
    };
}

/// Implement a subset of the mathematics traits
#[cfg(feature = "ndarrayl")]
macro_rules! make_math_ndarray {
    ($t:ty) => {
        impl<'a> ArgminDot<ndarray::Array1<$t>, $t> for ndarray::Array1<$t> {
            fn dot(&self, other: ndarray::Array1<$t>) -> $t {
                ndarray::Array1::dot(self, &other)
            }
        }

        impl<'a> ArgminDot<ndarray::Array1<$t>, ndarray::Array1<$t>> for ndarray::Array2<$t> {
            fn dot(&self, other: ndarray::Array1<$t>) -> ndarray::Array1<$t> {
                ndarray::Array2::dot(self, &other)
            }
        }

        impl<'a> ArgminDot<ndarray::Array2<$t>, ndarray::Array1<$t>> for ndarray::Array1<$t> {
            fn dot(&self, other: ndarray::Array2<$t>) -> ndarray::Array1<$t> {
                ndarray::Array1::dot(self, &other)
            }
        }

        impl<'a> ArgminDot<ndarray::Array2<$t>, ndarray::Array2<$t>> for ndarray::Array2<$t> {
            fn dot(&self, other: ndarray::Array2<$t>) -> ndarray::Array2<$t> {
                ndarray::Array2::dot(self, &other)
            }
        }

        impl<'a> ArgminAdd<ndarray::Array1<$t>> for ndarray::Array1<$t> {
            fn add(&self, other: ndarray::Array1<$t>) -> ndarray::Array1<$t> {
                self + &other
            }
        }

        impl<'a> ArgminAdd<ndarray::Array2<$t>> for ndarray::Array2<$t> {
            fn add(&self, other: ndarray::Array2<$t>) -> ndarray::Array2<$t> {
                self + &other
            }
        }

        impl<'a> ArgminSub<ndarray::Array1<$t>> for ndarray::Array1<$t> {
            fn sub(&self, other: ndarray::Array1<$t>) -> ndarray::Array1<$t> {
                self - &other
            }
        }

        impl<'a> ArgminSub<ndarray::Array2<$t>> for ndarray::Array2<$t> {
            fn sub(&self, other: ndarray::Array2<$t>) -> ndarray::Array2<$t> {
                self - &other
            }
        }

        impl<'a> ArgminScaledAdd<ndarray::Array1<$t>, $t> for ndarray::Array1<$t> {
            fn scaled_add(&self, scale: $t, other: ndarray::Array1<$t>) -> ndarray::Array1<$t> {
                self + &(scale * &other)
            }
        }

        impl<'a> ArgminScaledAdd<ndarray::Array2<$t>, $t> for ndarray::Array2<$t> {
            fn scaled_add(&self, scale: $t, other: ndarray::Array2<$t>) -> ndarray::Array2<$t> {
                self + &(scale * &other)
            }
        }

        impl<'a> ArgminScaledSub<ndarray::Array1<$t>, $t> for ndarray::Array1<$t> {
            fn scaled_sub(&self, scale: $t, other: ndarray::Array1<$t>) -> ndarray::Array1<$t> {
                self - &(scale * &other)
            }
        }

        impl<'a> ArgminScaledSub<ndarray::Array2<$t>, $t> for ndarray::Array2<$t> {
            fn scaled_sub(&self, scale: $t, other: ndarray::Array2<$t>) -> ndarray::Array2<$t> {
                self - &(scale * &other)
            }
        }

        impl<'a> ArgminScale<$t> for ndarray::Array1<$t> {
            fn scale(&self, scale: $t) -> ndarray::Array1<$t> {
                scale * self
            }
        }

        impl<'a> ArgminScale<$t> for ndarray::Array2<$t> {
            fn scale(&self, scale: $t) -> ndarray::Array2<$t> {
                scale * self
            }
        }
    };
}

#[cfg(feature = "ndarrayl")]
macro_rules! make_math_ndarray3 {
    ($t:ty) => {
        impl<'a> ArgminNorm<$t> for ndarray::Array1<$t> {
            fn norm(&self) -> $t {
                self.iter().map(|a| (*a).powi(2)).sum::<$t>().sqrt()
            }
        }

        impl<'a> ArgminInv<ndarray::Array2<$t>> for ndarray::Array2<$t>
        where
            ndarray::Array2<$t>: Inverse,
        {
            fn ainv(&self) -> Result<ndarray::Array2<$t>, Error> {
                // Stupid error types...
                Ok(self.inv()?)
            }
        }
    };
}

// Not sure if all of this makes any sense...
make_math!(Vec<f32>, f32, Vec<f32>);
make_math!(Vec<f64>, f64, Vec<f64>);
make_math!(Vec<i8>, i8, Vec<i8>);
make_math!(Vec<i16>, i16, Vec<i16>);
make_math!(Vec<i32>, i32, Vec<i32>);
make_math!(Vec<i64>, i64, Vec<i64>);
make_math!(Vec<u8>, u8, Vec<u8>);
make_math!(Vec<u16>, u16, Vec<u16>);
make_math!(Vec<u32>, u32, Vec<u32>);
make_math!(Vec<u64>, u64, Vec<u64>);
make_math!(Vec<isize>, isize, Vec<isize>);
make_math!(Vec<usize>, usize, Vec<usize>);
make_math!(&'a Vec<f32>, f32, Vec<f32>);
make_math!(&'a Vec<f64>, f64, Vec<f64>);
make_math!(&'a Vec<i8>, i8, Vec<i8>);
make_math!(&'a Vec<i16>, i16, Vec<i16>);
make_math!(&'a Vec<i32>, i32, Vec<i32>);
make_math!(&'a Vec<i64>, i64, Vec<i64>);
make_math!(&'a Vec<u8>, u8, Vec<u8>);
make_math!(&'a Vec<u16>, u16, Vec<u16>);
make_math!(&'a Vec<u32>, u32, Vec<u32>);
make_math!(&'a Vec<u64>, u64, Vec<u64>);
make_math!(&'a Vec<isize>, isize, Vec<isize>);
make_math!(&'a Vec<usize>, usize, Vec<usize>);

make_math2!(f32, Vec<f32>);
make_math2!(f64, Vec<f64>);
make_math2!(i8, Vec<i8>);
make_math2!(i16, Vec<i16>);
make_math2!(i32, Vec<i32>);
make_math2!(i64, Vec<i64>);
make_math2!(u8, Vec<u8>);
make_math2!(u16, Vec<u16>);
make_math2!(u32, Vec<u32>);
make_math2!(u64, Vec<u64>);
make_math2!(isize, Vec<isize>);
make_math2!(usize, Vec<usize>);

make_math3!(f32, Vec<f32>);
make_math3!(f64, Vec<f64>);

#[cfg(feature = "ndarrayl")]
make_math_ndarray!(f32);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(f64);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(i8);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(i16);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(i32);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(i64);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(u8);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(u16);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(u32);
#[cfg(feature = "ndarrayl")]
make_math_ndarray!(u64);
#[cfg(feature = "ndarrayl")]
make_math_ndarray3!(f32);
#[cfg(feature = "ndarrayl")]
make_math_ndarray3!(f64);

#[cfg(test)]
mod tests {
    #[cfg(feature = "ndarrayl")]
    #[test]
    fn test_swap_columns() {
        let mut a: ndarray::Array2<i64> = ndarray::arr2(&[[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        let b = super::swap_columns(&mut a, 1, 2);
        let c: ndarray::Array2<i64> = ndarray::arr2(&[[1, 3, 2], [4, 6, 5], [7, 9, 8]]);
        b.iter()
            .zip(c.iter())
            .map(|(x, y)| assert_eq!(*x, *y))
            .count();
        // this should work, but it doesn't.
        // assert_eq!(b, c);
    }

    #[cfg(feature = "ndarrayl")]
    #[test]
    fn test_swap_rows() {
        let mut a: ndarray::Array2<i64> = ndarray::arr2(&[[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        let b = super::swap_rows(&mut a, 1, 2);
        let c: ndarray::Array2<i64> = ndarray::arr2(&[[1, 2, 3], [7, 8, 9], [4, 5, 6]]);
        b.iter()
            .zip(c.iter())
            .map(|(x, y)| assert_eq!(*x, *y))
            .count();
        // this should work, but it doesn't.
        // assert_eq!(b, c);
    }

    #[cfg(feature = "ndarrayl")]
    #[test]
    fn test_swap_rows_and_columns() {
        let mut a: ndarray::Array2<i64> = ndarray::arr2(&[[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        let b = super::swap_columns(super::swap_rows(&mut a, 1, 2), 1, 2);
        let c: ndarray::Array2<i64> = ndarray::arr2(&[[1, 3, 2], [7, 9, 8], [4, 6, 5]]);
        b.iter()
            .zip(c.iter())
            .map(|(x, y)| assert_eq!(*x, *y))
            .count();
        // this should work, but it doesn't.
        // assert_eq!(b, c);
    }
}
