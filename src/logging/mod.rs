// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! # Logging

pub mod slog_logger;

use {ArgminKV, ArgminLog, Error};

pub struct ArgminLogger {
    logger: Vec<Box<ArgminLog>>,
}

impl ArgminLogger {
    pub fn new() -> Self {
        ArgminLogger { logger: vec![] }
    }

    pub fn push(&mut self, logger: Box<ArgminLog>) -> &mut Self {
        self.logger.push(logger);
        self
    }
}

impl ArgminLog for ArgminLogger {
    /// Log general info
    fn log_info(&self, msg: &str, kv: &ArgminKV) -> Result<(), Error> {
        for l in self.logger.iter() {
            l.log_info(msg, kv)?
        }
        Ok(())
    }

    /// This should be used to log iteration data only (because this is what may be saved in a CSV
    /// file or a database)
    fn log_iter(&self, kv: &ArgminKV) -> Result<(), Error> {
        for l in self.logger.iter() {
            l.log_iter(kv)?
        }
        Ok(())
    }
}
