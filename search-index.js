var N=null,E="",T="t",U="u",searchIndex={};
var R=["argmin_core","cost_func_count","grad_func_count","hessian_func_count","jacobian_func_count","modify_func_count","operator","argmin_core::ArgminError","Aborted","Always","Executor","argminresult","max_iters","target_cost","jacobian","best_param","best_cost","hessian","last_best_iter","termination_reason","terminationreason","duration","option","opwrapper","Constructor","result","observermode","checkpointmode","terminated","arraybase","ownedrepr","argmin_core::modcholesky","decomposition","WriteToFile","WriteToFileSerializer","ArgminSlogLogger","A logger based on `slog`","ArgminSlogKV","This type is necessary in order to be able to implement…","Calculation of the Jacobian J(x) of a vector function `fs`…","Calculation of the product of the Jacobian J(x) of a…","Calculation of the product of the Hessian H(x) of a…","Dot/scalar product of `T` and `self`","Return zero(s)","Add a `T` to `self`","Subtract a `T` from `self`","(Pointwise) Multiply a `T` with `self`","(Pointwise) Divide a `T` by `self`","Add a `T` scaled by an `U` to `self`","Subtract a `T` scaled by an `U` from `self`","Compute the l2-norm (`U`) of `self`","argminkv","iterstate","Jacobian","gradient","Computes the Hessian at the given parameters","argminiterdata","Set the initial step length","Set Hessian","Set Jacobian","get_param","get_cost","get_grad","get_hessian","get_jacobian","get_termination_reason","try_from","borrow_mut","try_into","to_owned","clone_into","to_string","string","type_id","borrow","typeid","argmin_core::executor","argmin_core::finitediff","as_fail","formatter","perturbationvector","observe_iter","observe_init","Do nothing, really.","modify","ordering","partial_cmp","nooperator","writetofileserializer","writetofile","argmincheckpoint","default","minimalnooperator","executor","observer","intoiterator","serialize","deserialize","serializer","backtrace","Attempts to downcast this `Error` to a particular `Fail`…","mod_cholesky_se90","Computes the modified Cholesky decomposition with the SE90…","mod_cholesky_se99","Computes the modified Cholesky decomposition with the SE99…","mod_cholesky_gmw81","Computes the modified Cholesky decomposition with the…","Called once at the beginning of the execution of the solver.","Called at every iteration of the solver","IterState","OpWrapper","ArgminResult","ArgminError","ObserverMode","TerminationReason","CheckpointMode","NoOperator","MinimalNoOperator","ArgminCheckpoint","Decomposition","GershgorinCircles","ModCholeskySE90","ModCholeskySE99","ModCholeskyGMW81","FiniteDiff","PerturbationVector","ArgminDot","ArgminWeightedDot","ArgminZero","ArgminZeroLike","ArgminEye","ArgminAdd","ArgminSub","ArgminMul","ArgminDiv","ArgminScaledAdd","ArgminScaledSub","ArgminNorm","ArgminTranspose","ArgminInv","ArgminRandom","ArgminMinMax","ArgminLineSearch","ArgminTrustRegion","ArgminNLCGBetaUpdate","ArgminIterData"];

searchIndex[R[0]]={"doc":"Argmin Optimizaton toolbox core","i":[[3,"Error",R[0],"The `Error` type, which can contain any failure.",N,N],[3,R[109],E,E,N,N],[12,"param",E,"Current parameter vector",0,N],[12,"prev_param",E,"Previous parameter vector",0,N],[12,R[15],E,"Current best parameter vector",0,N],[12,"prev_best_param",E,"Previous best parameter vector",0,N],[12,"cost",E,"Current cost function value",0,N],[12,"prev_cost",E,"Previous cost function value",0,N],[12,R[16],E,"Current best cost function value",0,N],[12,"prev_best_cost",E,"Previous best cost function value",0,N],[12,R[13],E,"Target cost function value",0,N],[12,"grad",E,"Current gradient",0,N],[12,"prev_grad",E,"Previous gradient",0,N],[12,R[17],E,"Current Hessian",0,N],[12,"prev_hessian",E,"Previous Hessian",0,N],[12,R[14],E,"Current Jacobian",0,N],[12,"prev_jacobian",E,"Previous Jacobian",0,N],[12,"iter",E,"Current iteration",0,N],[12,R[18],E,"Iteration number of last best cost",0,N],[12,R[12],E,"Maximum number of iterations",0,N],[12,R[1],E,"Number of cost function evaluations so far",0,N],[12,R[2],E,"Number of gradient evaluations so far",0,N],[12,R[3],E,"Number of Hessian evaluations so far",0,N],[12,R[4],E,"Number of Jacobian evaluations so far",0,N],[12,R[5],E,"Number of modify evaluations so far",0,N],[12,"time",E,"Time required so far",0,N],[12,R[19],E,"Reason of termination",0,N],[3,"ArgminKV",E,"A simple key-value storage",N,N],[12,"kv",E,"The actual key value storage",1,N],[3,R[116],E,"Fake Operators for testing No-op operator with free choice…",N,N],[3,R[117],E,E,N,N],[3,R[33],E,E,N,N],[3,R[35],E,R[36],N,N],[3,R[37],E,R[38],N,N],[12,"kv",E,E,2,N],[3,"Observer",E,"Container for observers which acts just like a single…",N,N],[3,R[110],E,"This wraps an operator and keeps track of how often the…",N,N],[12,R[1],E,E,3,N],[12,R[2],E,E,3,N],[12,R[3],E,E,3,N],[12,R[4],E,E,3,N],[12,R[5],E,E,3,N],[3,R[111],E,"This is returned by the `Executor` after the solver is run…",N,N],[12,R[6],E,R[6],4,N],[12,"state",E,"iteration state",4,N],[3,R[118],E,E,N,N],[3,R[145],E,"The datastructure which is returned by the `next_iter`…",N,N],[4,R[112],E,E,N,N],[13,"InvalidParameter",E,"Indicates and invalid parameter",5,N],[12,"text",R[7],E,5,N],[13,"NotImplemented",R[0],"Indicates that a function is not implemented",5,N],[12,"text",R[7],E,5,N],[13,"NotInitialized",R[0],"Indicates that a function is not initialized",5,N],[12,"text",R[7],E,5,N],[13,"ConditionViolated",R[0],"Indicates that a condition is violated",5,N],[12,"text",R[7],E,5,N],[13,"CheckpointNotFound",R[0],"Checkpoint was not found",5,N],[12,"text",R[7],E,5,N],[13,"ImpossibleError",R[0],"Indicates an impossible error",5,N],[12,"text",R[7],E,5,N],[4,R[34],R[0],E,N,N],[13,"Bincode",E,E,6,N],[13,"JSON",E,E,6,N],[4,R[113],E,"This is used to indicate how often the observer will…",N,N],[13,"Never",E,E,7,N],[13,R[9],E,E,7,N],[13,"Every",E,E,7,N],[13,"NewBest",E,E,7,N],[4,R[114],E,"Indicates why the optimization algorithm stopped",N,N],[13,"NotTerminated",E,"In case it has not terminated yet",8,N],[13,"MaxItersReached",E,"Maximum number of iterations reached",8,N],[13,"TargetCostReached",E,"Target cost function value reached",8,N],[13,"TargetPrecisionReached",E,"Target precision reached",8,N],[13,"NoChangeInCost",E,"Cost function value did not change",8,N],[13,"AcceptedStallIterExceeded",E,"Acceped stall iter exceeded",8,N],[13,"BestStallIterExceeded",E,"Best stall iter exceeded",8,N],[13,"LineSearchConditionMet",E,"Condition for Line search met",8,N],[13,R[8],E,R[8],8,N],[4,R[115],E,E,N,N],[13,"Never",E,E,9,N],[13,"Every",E,E,9,N],[13,R[9],E,E,9,N],[5,"load_checkpoint",E,E,N,[[["path"],["asref",["path"]]],[[R[25],["error"]],["deserializeowned"],["error"]]]],[0,"macros",E,"Macros # Macros",N,N],[0,R[93],E,R[10],N,N],[3,R[10],R[76],E,N,N],[11,"new",E,E,10,[[["o"],["s"]],["self"]]],[11,"from_checkpoint",E,E,10,[[["path"],["asref",["path"]]],[["error"],[R[25],["error"]]]]],[11,"run",E,E,10,[[],[["error"],[R[25],[R[11],"error"]],[R[11]]]]],[11,"add_observer",E,"Attaches a observer which implements `ArgminLog` to the…",10,[[[R[26]],["observe"]],["self"]]],[11,R[12],E,"Set maximum number of iterations",10,[[["u64"]],["self"]]],[11,R[13],E,"Set target cost value",10,[[["f64"]],["self"]]],[11,"cost",E,"Set cost value",10,[[["f64"]],["self"]]],[11,"grad",E,"Set Gradient",10,[[],["self"]]],[11,R[17],E,R[58],10,[[],["self"]]],[11,R[14],E,R[59],10,[[],["self"]]],[11,"checkpoint_dir",E,"Set checkpoint directory",10,[[["str"]],["self"]]],[11,"checkpoint_name",E,"Set checkpoint name",10,[[["str"]],["self"]]],[11,"checkpoint_mode",E,E,10,[[[R[27]]],["self"]]],[11,"ctrlc",E,"Turn Ctrl-C handling on or off (default: on)",10,[[["bool"]],["self"]]],[11,"new",R[0],"Create new IterState from `param`",0,[[],["self"]]],[11,"param",E,"Set parameter vector. This shifts the stored parameter…",0,[[["self"]],["self"]]],[11,R[15],E,"Set best paramater vector. This shifts the stored best…",0,[[["self"]],["self"]]],[11,"cost",E,"Set the current cost function value. This shifts the…",0,[[["self"],["f64"]],["self"]]],[11,R[16],E,"Set the current best cost function value. This shifts the…",0,[[["self"],["f64"]],["self"]]],[11,"grad",E,"Set gradient. This shifts the stored gradient to the…",0,[[["self"]],["self"]]],[11,R[17],E,"Set Hessian. This shifts the stored Hessian to the…",0,[[["self"]],["self"]]],[11,R[14],E,"Set Jacobian. This shifts the stored Jacobian to the…",0,[[["self"]],["self"]]],[11,R[13],E,E,0,[[["self"],["f64"]],["self"]]],[11,R[12],E,E,0,[[["self"],["u64"]],["self"]]],[11,R[18],E,E,0,[[["self"],["u64"]],["self"]]],[11,R[19],E,E,0,[[["self"],[R[20]]],["self"]]],[11,"time",E,E,0,[[["self"],[R[21]]],["self"]]],[11,R[60],E,E,0,[[["self"]]]],[11,"get_prev_param",E,E,0,[[["self"]]]],[11,"get_best_param",E,E,0,[[["self"]]]],[11,"get_prev_best_param",E,E,0,[[["self"]]]],[11,R[61],E,E,0,[[["self"]],["f64"]]],[11,"get_prev_cost",E,E,0,[[["self"]],["f64"]]],[11,"get_best_cost",E,E,0,[[["self"]],["f64"]]],[11,"get_prev_best_cost",E,E,0,[[["self"]],["f64"]]],[11,"get_target_cost",E,E,0,[[["self"]],["f64"]]],[11,"get_cost_func_count",E,E,0,[[["self"]],["u64"]]],[11,"get_grad_func_count",E,E,0,[[["self"]],["u64"]]],[11,"get_hessian_func_count",E,E,0,[[["self"]],["u64"]]],[11,"get_jacobian_func_count",E,E,0,[[["self"]],["u64"]]],[11,"get_modify_func_count",E,E,0,[[["self"]],["u64"]]],[11,"get_last_best_iter",E,E,0,[[["self"]],["u64"]]],[11,R[65],E,E,0,[[["self"]],[R[20]]]],[11,"get_time",E,E,0,[[["self"]],[R[21]]]],[11,R[62],E,E,0,[[["self"]],[R[22]]]],[11,"get_prev_grad",E,E,0,[[["self"]],[R[22]]]],[11,R[63],E,E,0,[[["self"]],[R[22]]]],[11,"get_prev_hessian",E,E,0,[[["self"]],[R[22]]]],[11,R[64],E,E,0,[[["self"]],[R[22]]]],[11,"get_prev_jacobian",E,E,0,[[["self"]],[R[22]]]],[11,"get_iter",E,E,0,[[["self"]],["u64"]]],[11,"get_max_iters",E,E,0,[[["self"]],["u64"]]],[11,"increment_iter",E,"Increment the number of iterations by one",0,[[["self"]]]],[11,"increment_func_counts",E,"Increment all function evaluation counts by the evaluation…",0,[[["self"],[R[23]]]]],[11,"set_func_counts",E,"Set all function evaluation counts to the evaluation…",0,[[["self"],[R[23]]]]],[11,"increment_cost_func_count",E,"Increment cost function evaluation count by `num`",0,[[["self"],["u64"]]]],[11,"increment_grad_func_count",E,"Increment gradient function evaluation count by `num`",0,[[["self"],["u64"]]]],[11,"increment_hessian_func_count",E,"Increment Hessian function evaluation count by `num`",0,[[["self"],["u64"]]]],[11,"increment_jacobian_func_count",E,"Increment Jacobian function evaluation count by `num`",0,[[["self"],["u64"]]]],[11,"increment_modify_func_count",E,"Increment modify function evaluation count by `num`",0,[[["self"],["u64"]]]],[11,"new_best",E,"Indicate that a new best parameter vector was found",0,[[["self"]]]],[11,"is_best",E,"Returns whether the current parameter vector is also the…",0,[[["self"]],["bool"]]],[11,R[28],E,"Return whether the algorithm has terminated or not",0,[[["self"]],["bool"]]],[11,"new",E,R[24],1,[[],["self"]]],[11,"push",E,"Push a key-value pair to the `kv` vector.",1,[[["display"],["self"],["str"]],["self"]]],[11,"merge",E,"Merge another `kv` into `self.kv`",1,[[[R[51]]],["self"]]],[11,"new",E,R[24],11,[[],["self"]]],[11,"new",E,R[24],12,[[],["self"]]],[11,"new",E,E,13,[[["str"]],["self"]]],[11,R[98],E,E,13,[[[R[88]]],["self"]]],[11,"term",E,"Log to the terminal in a blocking way",14,[[],["self"]]],[11,"term_noblock",E,"Log to the terminal in a non-blocking way (in case of…",14,[[],["self"]]],[11,"file",E,"Log JSON to a file in a blocking way",14,[[["str"]],[["error"],[R[25],["error"]]]]],[11,"file_noblock",E,"Log JSON to a file in a non-blocking way (in case of…",14,[[["str"]],[["error"],[R[25],["error"]]]]],[11,"new",E,R[24],15,[[],["self"]]],[11,"push",E,"Push another `Observe` to the `observer` field",15,[[["self"],[R[26]],["observe"]],["self"]]],[11,"new",E,R[24],3,[[["o"]],["self"]]],[11,"apply",E,"Calls the `apply` method of `op` and increments…",3,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[54],E,"Calls the `gradient` method of `op` and increments…",3,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[17],E,"Calls the `hessian` method of `op` and increments…",3,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[14],E,"Calls the `jacobian` method of `op` and increments…",3,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[84],E,"Calls the `modify` method of `op` and increments…",3,[[["self"],["f64"]],[["error"],[R[25],["error"]]]]],[11,"consume_op",E,"Consumes an operator by increasing the function call…",3,[[["self"],[R[23]]]]],[11,"reset",E,"Reset the cost function counts to zero",3,[[],["self"]]],[11,"get_op",E,"Returns the operator `op` by taking ownership of `self`.",3,[[],["o"]]],[11,"clone_op",E,"Returns a clone of the operator `op`.",3,[[["self"]],["o"]]],[11,"new_from_op",E,"Creates a new `OpWrapper<O>` from another `OpWrapper<O>`…",3,[[[R[23]]],["self"]]],[11,"new",E,R[24],4,[[["o"],[R[52]]],["self"]]],[11,"new",E,E,16,[[["str"],[R[27]]],[["error"],[R[25],["error"]]]]],[11,"set_dir",E,E,16,[[["str"],["self"]]]],[11,"dir",E,E,16,[[["self"]],[R[72]]]],[11,"set_name",E,E,16,[[["str"],["self"]]]],[11,"name",E,E,16,[[["self"]],[R[72]]]],[11,"set_mode",E,E,16,[[[R[27]],["self"]]]],[11,"store",E,E,16,[[[R[72]],[T],["self"]],[["error"],[R[25],["error"]]]]],[11,"store_cond",E,E,16,[[[T],["self"],["u64"]],[["error"],[R[25],["error"]]]]],[11,R[28],E,"Returns `true` if a solver terminated and `false` otherwise",8,[[],["bool"]]],[11,"text",E,"Returns a texual representation of what happened",8,[[["self"]],["str"]]],[0,"modcholesky",E,"Modified Cholesky decompositions Modified Cholesky…",N,N],[0,"utils",R[31],"Utility functions",N,N],[5,"eigenvalues_2x2","argmin_core::modcholesky::utils","Computes the Eigenvalues of a 2x2 matrix",N,[[[R[29]]]]],[5,"swap_columns",E,"Swaps columns `idx1` and `idx2` of matrix `mat`",N,[[[R[29]],["usize"]]]],[5,"swap_rows",E,"Swaps rows `idx1` and `idx2` of matrix `mat`",N,[[[R[29]],["usize"]]]],[5,"index_of_largest",E,"Returns the index of the largest element in a 1D array",N,[[[R[29]]],["usize"]]],[5,"index_of_largest_abs",E,"Returns the index of the element with the largest absolute…",N,[[[R[29]]],["usize"]]],[5,"index_to_permutation_mat",E,"Returns the permutation matrix for a vector of permuted…",N,[[],[["dim"],[R[30],["f64"]],[R[29],[R[30],"dim"]]]]],[5,"diag_mat_from_arr",E,"Builds a diagonal matrix from a 1D slice",N,[[],[[R[30]],[R[29],[R[30],"dim"]],["dim"]]]],[5,"random_householder",E,"Returns a random Householder matrix of dimension `dim` and…",N,[[["u8"],["usize"]],[["dim"],[R[30],["f64"]],[R[29],[R[30],"dim"]]]]],[5,"random_diagonal",E,"Returns a random diagonal matrix with Eigenvalues…",N,[[["u8"],["usize"]],[["dim"],[R[30],["f64"]],[R[29],[R[30],"dim"]]]]],[3,R[119],R[31],E,N,N],[12,"l",E,E,17,N],[12,"e",E,E,17,N],[12,"p",E,E,17,N],[8,R[120],E,"Gershgorin circles",N,N],[10,"gershgorin_circles",E,"Computes the Gershgorin Circles of a matrix",18,[[["self"]],["vec"]]],[8,R[121],E,"Schnabel & Eskow algorithm (1990)",N,N],[11,R[101],E,R[102],19,[[["self"]],[R[32]]]],[8,R[122],E,"Schnabel & Eskow algorithm (1999)",N,N],[11,R[103],E,R[104],20,[[["self"]],[R[32]]]],[8,R[123],E,"Gill, Murray and Wright (1981)",N,N],[11,R[105],E,R[106],21,[[["self"]],[R[32]]]],[0,"file",R[0],"Output parameter vectors to file",N,N],[3,R[33],"argmin_core::file",E,N,N],[4,R[34],E,E,N,N],[13,"Bincode",E,E,6,N],[13,"JSON",E,E,6,N],[0,"slog_logger",R[0],"Loggers based on the `slog` crate",N,N],[3,R[35],"argmin_core::slog_logger",R[36],N,N],[3,R[37],E,R[38],N,N],[12,"kv",E,E,2,N],[0,"finitediff",R[0],"Finite Differentiation",N,N],[8,R[124],R[77],E,N,N],[16,R[53],E,E,22,N],[16,"Hessian",E,E,22,N],[16,"OperatorOutput",E,E,22,N],[10,"forward_diff",E,"Forward difference calculated as",22,[[["fn"],["self"]],["self"]]],[10,"central_diff",E,"Central difference calculated as",22,[[["fn"],["self"]],["self"]]],[10,"forward_jacobian",E,R[39],22,[[["fn"],["self"]]]],[10,"central_jacobian",E,R[39],22,[[["fn"],["self"]]]],[10,"forward_jacobian_vec_prod",E,R[40],22,[[["fn"],["self"]],["self"]]],[10,"central_jacobian_vec_prod",E,R[40],22,[[["fn"],["self"]],["self"]]],[10,"forward_jacobian_pert",E,E,22,[[["fn"],["vec"],["self"]]]],[10,"central_jacobian_pert",E,E,22,[[["fn"],["vec"],["self"]]]],[10,"forward_hessian",E,"Calculation of the Hessian using forward differences",22,[[["fn"],["self"]]]],[10,"central_hessian",E,"Calculation of the Hessian using central differences",22,[[["fn"],["self"]]]],[10,"forward_hessian_vec_prod",E,R[41],22,[[["fn"],["self"]],["self"]]],[10,"central_hessian_vec_prod",E,R[41],22,[[["fn"],["self"]],["self"]]],[10,"forward_hessian_nograd",E,"Calculation of the Hessian using forward differences…",22,[[["fn"],["self"]]]],[10,"forward_hessian_nograd_sparse",E,"Calculation of a sparse Hessian using forward differences…",22,[[["vec"],["fn"],["self"]]]],[3,R[125],E,"Perturbation Vector for the accelerated computation of the…",N,N],[12,"x_idx",E,"x indices",23,N],[12,"r_idx",E,"correspoding function indices",23,N],[6,"PerturbationVectors",E,"A collection of `PerturbationVector`s",N,N],[8,R[126],R[0],R[42],N,N],[10,"dot",E,R[42],24,[[[T],["self"]],[U]]],[8,R[127],E,"Dot/scalar product of `T` and `self` weighted by W (p^TWv)",N,N],[10,"weighted_dot",E,R[42],25,[[[T],["self"],["v"]],[U]]],[8,R[128],E,"Return param vector of all zeros (for now, this is a hack.…",N,N],[10,"zero",E,R[43],26,[[],["self"]]],[8,R[129],E,"Zero for dynamically sized objects",N,N],[10,"zero_like",E,R[43],27,[[["self"]],["self"]]],[8,R[130],E,E,N,N],[10,"eye",E,E,28,[[["usize"]],["self"]]],[10,"eye_like",E,E,28,[[["self"]],["self"]]],[8,R[131],E,R[44],N,N],[10,"add",E,R[44],29,[[[T],["self"]],[U]]],[8,R[132],E,R[45],N,N],[10,"sub",E,R[45],30,[[[T],["self"]],[U]]],[8,R[133],E,R[46],N,N],[10,"mul",E,R[46],31,[[[T],["self"]],[U]]],[8,R[134],E,R[47],N,N],[10,"div",E,R[47],32,[[[T],["self"]],[U]]],[8,R[135],E,R[48],N,N],[10,"scaled_add",E,R[48],33,[[[U],[T],["self"]],["v"]]],[8,R[136],E,R[49],N,N],[10,"scaled_sub",E,R[49],34,[[[U],[T],["self"]],["v"]]],[8,R[137],E,R[50],N,N],[10,"norm",E,R[50],35,[[["self"]],[U]]],[8,R[138],E,E,N,N],[10,T,E,E,36,[[],["self"]]],[8,R[139],E,"Compute the inverse (`T`) of `self`",N,N],[10,"inv",E,E,37,[[["self"]],[[R[25],["error"]],["error"]]]],[8,R[140],E,E,N,N],[10,"rand_from_range",E,"Get a random element between min and max,",38,[[["self"]],["self"]]],[8,R[141],E,E,N,N],[10,"min",E,"Select piecewise minimum / maximum",39,[[["self"]],["self"]]],[10,"max",E,E,39,[[["self"]],["self"]]],[8,"Observe",E,"Defines the interface every Observer needs to expose",N,N],[11,R[82],E,R[107],40,[[["str"],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,R[81],E,R[108],40,[[[R[52]],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[8,"ArgminOp",E,"This trait needs to be implemented for every operator/cost…",N,N],[16,"Param",E,"Type of the parameter vector",41,N],[16,"Output",E,"Output of the operator",41,N],[16,"Hessian",E,"Type of Hessian",41,N],[16,R[53],E,"Type of Jacobian",41,N],[11,"apply",E,"Applies the operator/cost function to parameters",41,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[54],E,"Computes the gradient at the given parameters",41,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[17],E,R[55],41,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[14],E,R[55],41,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[84],E,"Modifies a parameter vector. Comes with a variable that…",41,[[["f64"],["self"]],[[R[25],["error"]],["error"]]]],[8,"Solver",E,E,N,N],[18,"NAME",E,E,42,N],[10,"next_iter",E,"Computes one iteration of the algorithm.",42,[[[R[52]],["self"],[R[23]]],[[R[25],[R[56],"error"]],["error"],[R[56]]]]],[11,"init",E,"Initializes the algorithm",42,[[[R[52]],["self"],[R[23]]],[[R[25],[R[22],"error"]],["error"],[R[22],[R[56]]]]]],[11,"terminate_internal",E,"Checks whether basic termination reasons apply.",42,[[[R[52]],["self"]],[R[20]]]],[11,"terminate",E,"Checks whether the algorithm must be terminated",42,[[[R[52]],["self"]],[R[20]]]],[8,R[142],E,"Defines a common interface for line search methods.",N,N],[10,"set_search_direction",E,"Set the search direction",43,[[["self"],["p"]]]],[10,"set_init_alpha",E,R[57],43,[[["self"],["f64"]],[["error"],[R[25],["error"]]]]],[8,R[143],E,"Defines a common interface to methods which calculate…",N,N],[10,"set_radius",E,R[57],44,[[["self"],["f64"]]]],[8,R[144],E,"Common interface for beta update methods (Nonlinear-CG)",N,N],[10,"update",E,"Update beta Parameter 1: \\nabla f_k Parameter 2: \\nabla…",45,[[[T],["self"]],["f64"]]],[11,"new",E,R[24],46,[[],["self"]]],[11,"param",E,"Set parameter vector",46,[[],["self"]]],[11,"cost",E,"Set cost function value",46,[[["f64"]],["self"]]],[11,"grad",E,"Set gradient",46,[[],["self"]]],[11,R[17],E,R[58],46,[[],["self"]]],[11,R[14],E,R[59],46,[[],["self"]]],[11,"kv",E,"Adds an `ArgminKV`",46,[[[R[51]]],["self"]]],[11,R[19],E,"Set termination reason",46,[[[R[20]]],["self"]]],[11,R[60],E,"Get parameter vector",46,[[["self"]],[R[22]]]],[11,R[61],E,"Get cost function value",46,[[["self"]],[[R[22],["f64"]],["f64"]]]],[11,R[62],E,"Get gradient",46,[[["self"]],[R[22]]]],[11,R[63],E,"Get Hessian",46,[[["self"]],[R[22]]]],[11,R[64],E,"Get Jacobian",46,[[["self"]],[R[22]]]],[11,R[65],E,"Get termination reason",46,[[["self"]],[[R[20]],[R[22],[R[20]]]]]],[11,"get_kv",E,"Return KV",46,[[["self"]],[R[51]]]],[14,"make_kv",E,"Creates an `ArgminKV` at compile time in order to avoid…",N,N],[14,"check_param",E,"Release an `T` from an `Option<T>` if it is not `None`. If…",N,N],[14,"trait_bound",E,"Reuse a list of trait bounds by giving it a name, e.g.…",N,N],[11,"into",E,E,47,[[],[U]]],[11,"from",E,E,47,[[[T]],[T]]],[11,R[71],E,E,47,[[["self"]],[R[72]]]],[11,R[66],E,E,47,[[[U]],[R[25]]]],[11,R[74],E,E,47,[[["self"]],[T]]],[11,R[73],E,E,47,[[["self"]],[R[75]]]],[11,R[67],E,E,47,[[["self"]],[T]]],[11,R[68],E,E,47,[[],[R[25]]]],[11,R[78],E,E,47,[[["self"]],["fail"]]],[11,"into",E,E,0,[[],[U]]],[11,R[69],E,E,0,[[["self"]],[T]]],[11,R[70],E,E,0,[[[T],["self"]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[66],E,E,0,[[[U]],[R[25]]]],[11,R[74],E,E,0,[[["self"]],[T]]],[11,R[73],E,E,0,[[["self"]],[R[75]]]],[11,R[67],E,E,0,[[["self"]],[T]]],[11,R[68],E,E,0,[[],[R[25]]]],[11,"into",E,E,1,[[],[U]]],[11,R[69],E,E,1,[[["self"]],[T]]],[11,R[70],E,E,1,[[[T],["self"]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[71],E,E,1,[[["self"]],[R[72]]]],[11,R[66],E,E,1,[[[U]],[R[25]]]],[11,R[74],E,E,1,[[["self"]],[T]]],[11,R[73],E,E,1,[[["self"]],[R[75]]]],[11,R[67],E,E,1,[[["self"]],[T]]],[11,R[68],E,E,1,[[],[R[25]]]],[11,"into",E,E,11,[[],[U]]],[11,R[69],E,E,11,[[["self"]],[T]]],[11,R[70],E,E,11,[[[T],["self"]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[71],E,E,11,[[["self"]],[R[72]]]],[11,R[66],E,E,11,[[[U]],[R[25]]]],[11,R[74],E,E,11,[[["self"]],[T]]],[11,R[73],E,E,11,[[["self"]],[R[75]]]],[11,R[67],E,E,11,[[["self"]],[T]]],[11,R[68],E,E,11,[[],[R[25]]]],[11,"into",E,E,12,[[],[U]]],[11,R[69],E,E,12,[[["self"]],[T]]],[11,R[70],E,E,12,[[[T],["self"]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[71],E,E,12,[[["self"]],[R[72]]]],[11,R[66],E,E,12,[[[U]],[R[25]]]],[11,R[74],E,E,12,[[["self"]],[T]]],[11,R[73],E,E,12,[[["self"]],[R[75]]]],[11,R[67],E,E,12,[[["self"]],[T]]],[11,R[68],E,E,12,[[],[R[25]]]],[11,"into",E,E,13,[[],[U]]],[11,R[69],E,E,13,[[["self"]],[T]]],[11,R[70],E,E,13,[[[T],["self"]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,R[66],E,E,13,[[[U]],[R[25]]]],[11,R[74],E,E,13,[[["self"]],[T]]],[11,R[73],E,E,13,[[["self"]],[R[75]]]],[11,R[67],E,E,13,[[["self"]],[T]]],[11,R[68],E,E,13,[[],[R[25]]]],[11,"into",E,E,14,[[],[U]]],[11,R[69],E,E,14,[[["self"]],[T]]],[11,R[70],E,E,14,[[[T],["self"]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[66],E,E,14,[[[U]],[R[25]]]],[11,R[74],E,E,14,[[["self"]],[T]]],[11,R[73],E,E,14,[[["self"]],[R[75]]]],[11,R[67],E,E,14,[[["self"]],[T]]],[11,R[68],E,E,14,[[],[R[25]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[66],E,E,2,[[[U]],[R[25]]]],[11,R[74],E,E,2,[[["self"]],[T]]],[11,R[73],E,E,2,[[["self"]],[R[75]]]],[11,R[67],E,E,2,[[["self"]],[T]]],[11,R[68],E,E,2,[[],[R[25]]]],[11,"into",E,E,15,[[],[U]]],[11,R[69],E,E,15,[[["self"]],[T]]],[11,R[70],E,E,15,[[[T],["self"]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[66],E,E,15,[[[U]],[R[25]]]],[11,R[74],E,E,15,[[["self"]],[T]]],[11,R[73],E,E,15,[[["self"]],[R[75]]]],[11,R[67],E,E,15,[[["self"]],[T]]],[11,R[68],E,E,15,[[],[R[25]]]],[11,"into",E,E,3,[[],[U]]],[11,R[69],E,E,3,[[["self"]],[T]]],[11,R[70],E,E,3,[[[T],["self"]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[66],E,E,3,[[[U]],[R[25]]]],[11,R[74],E,E,3,[[["self"]],[T]]],[11,R[73],E,E,3,[[["self"]],[R[75]]]],[11,R[67],E,E,3,[[["self"]],[T]]],[11,R[68],E,E,3,[[],[R[25]]]],[11,"into",E,E,4,[[],[U]]],[11,R[69],E,E,4,[[["self"]],[T]]],[11,R[70],E,E,4,[[[T],["self"]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[71],E,E,4,[[["self"]],[R[72]]]],[11,R[66],E,E,4,[[[U]],[R[25]]]],[11,R[74],E,E,4,[[["self"]],[T]]],[11,R[73],E,E,4,[[["self"]],[R[75]]]],[11,R[67],E,E,4,[[["self"]],[T]]],[11,R[68],E,E,4,[[],[R[25]]]],[11,"into",E,E,16,[[],[U]]],[11,R[69],E,E,16,[[["self"]],[T]]],[11,R[70],E,E,16,[[[T],["self"]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,R[66],E,E,16,[[[U]],[R[25]]]],[11,R[74],E,E,16,[[["self"]],[T]]],[11,R[73],E,E,16,[[["self"]],[R[75]]]],[11,R[67],E,E,16,[[["self"]],[T]]],[11,R[68],E,E,16,[[],[R[25]]]],[11,"into",E,E,46,[[],[U]]],[11,R[69],E,E,46,[[["self"]],[T]]],[11,R[70],E,E,46,[[[T],["self"]]]],[11,"from",E,E,46,[[[T]],[T]]],[11,R[66],E,E,46,[[[U]],[R[25]]]],[11,R[74],E,E,46,[[["self"]],[T]]],[11,R[73],E,E,46,[[["self"]],[R[75]]]],[11,R[67],E,E,46,[[["self"]],[T]]],[11,R[68],E,E,46,[[],[R[25]]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[71],E,E,5,[[["self"]],[R[72]]]],[11,R[66],E,E,5,[[[U]],[R[25]]]],[11,R[74],E,E,5,[[["self"]],[T]]],[11,R[73],E,E,5,[[["self"]],[R[75]]]],[11,R[67],E,E,5,[[["self"]],[T]]],[11,R[68],E,E,5,[[],[R[25]]]],[11,R[78],E,E,5,[[["self"]],["fail"]]],[11,"into",E,E,6,[[],[U]]],[11,R[69],E,E,6,[[["self"]],[T]]],[11,R[70],E,E,6,[[[T],["self"]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[66],E,E,6,[[[U]],[R[25]]]],[11,R[74],E,E,6,[[["self"]],[T]]],[11,R[73],E,E,6,[[["self"]],[R[75]]]],[11,R[67],E,E,6,[[["self"]],[T]]],[11,R[68],E,E,6,[[],[R[25]]]],[11,"into",E,E,7,[[],[U]]],[11,R[69],E,E,7,[[["self"]],[T]]],[11,R[70],E,E,7,[[[T],["self"]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[66],E,E,7,[[[U]],[R[25]]]],[11,R[74],E,E,7,[[["self"]],[T]]],[11,R[73],E,E,7,[[["self"]],[R[75]]]],[11,R[67],E,E,7,[[["self"]],[T]]],[11,R[68],E,E,7,[[],[R[25]]]],[11,"into",E,E,8,[[],[U]]],[11,R[69],E,E,8,[[["self"]],[T]]],[11,R[70],E,E,8,[[[T],["self"]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[71],E,E,8,[[["self"]],[R[72]]]],[11,R[66],E,E,8,[[[U]],[R[25]]]],[11,R[74],E,E,8,[[["self"]],[T]]],[11,R[73],E,E,8,[[["self"]],[R[75]]]],[11,R[67],E,E,8,[[["self"]],[T]]],[11,R[68],E,E,8,[[],[R[25]]]],[11,"into",E,E,9,[[],[U]]],[11,R[69],E,E,9,[[["self"]],[T]]],[11,R[70],E,E,9,[[[T],["self"]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[71],E,E,9,[[["self"]],[R[72]]]],[11,R[66],E,E,9,[[[U]],[R[25]]]],[11,R[74],E,E,9,[[["self"]],[T]]],[11,R[73],E,E,9,[[["self"]],[R[75]]]],[11,R[67],E,E,9,[[["self"]],[T]]],[11,R[68],E,E,9,[[],[R[25]]]],[11,"into",R[76],E,10,[[],[U]]],[11,R[69],E,E,10,[[["self"]],[T]]],[11,R[70],E,E,10,[[[T],["self"]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[66],E,E,10,[[[U]],[R[25]]]],[11,R[74],E,E,10,[[["self"]],[T]]],[11,R[73],E,E,10,[[["self"]],[R[75]]]],[11,R[67],E,E,10,[[["self"]],[T]]],[11,R[68],E,E,10,[[],[R[25]]]],[11,"into",R[31],E,17,[[],[U]]],[11,"from",E,E,17,[[[T]],[T]]],[11,R[66],E,E,17,[[[U]],[R[25]]]],[11,R[74],E,E,17,[[["self"]],[T]]],[11,R[73],E,E,17,[[["self"]],[R[75]]]],[11,R[67],E,E,17,[[["self"]],[T]]],[11,R[68],E,E,17,[[],[R[25]]]],[11,"into",R[77],E,23,[[],[U]]],[11,R[69],E,E,23,[[["self"]],[T]]],[11,R[70],E,E,23,[[[T],["self"]]]],[11,"from",E,E,23,[[[T]],[T]]],[11,R[66],E,E,23,[[[U]],[R[25]]]],[11,R[74],E,E,23,[[["self"]],[T]]],[11,R[73],E,E,23,[[["self"]],[R[75]]]],[11,R[67],E,E,23,[[["self"]],[T]]],[11,R[68],E,E,23,[[],[R[25]]]],[11,"as_ref",R[0],E,47,[[["self"]],["fail"]]],[11,"from",E,E,47,[[["f"]],["error"]]],[11,R[78],E,E,47,[[["self"]],["fail"]]],[11,"fmt",E,E,47,[[[R[79]],["self"]],[[R[25],["error"]],["error"]]]],[11,"fmt",E,E,47,[[[R[79]],["self"]],[[R[25],["error"]],["error"]]]],[11,"clone",R[77],E,23,[[["self"]],[R[80]]]],[11,R[91],E,E,23,[[],[R[80]]]],[11,R[81],R[0],E,13,[[[R[52]],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,R[82],E,"Log general info",14,[[["str"],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,R[81],E,"This should be used to log iteration data only (because…",14,[[[R[52]],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,R[82],E,"Initial observation This is called after the…",15,[[["str"],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,R[81],E,"This is called after every iteration and gets the current…",15,[[[R[52]],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,"apply",E,R[83],11,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[54],E,R[83],11,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[17],E,R[83],11,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[84],E,R[83],11,[[["f64"],["self"]],[[R[25],["error"]],["error"]]]],[11,"apply",E,R[83],12,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[54],E,R[83],12,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[17],E,R[83],12,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[84],E,R[83],12,[[["f64"],["self"]],[[R[25],["error"]],["error"]]]],[11,"apply",E,E,3,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[54],E,E,3,[[["self"]],[[R[25],["error"]],["error"]]]],[11,R[17],E,E,3,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[14],E,E,3,[[["self"]],[["error"],[R[25],["error"]]]]],[11,R[84],E,E,3,[[["f64"],["self"]],[[R[25],["error"]],["error"]]]],[11,R[86],E,E,1,[[["self"],[R[51]]],[[R[22],[R[85]]],[R[85]]]]],[11,"lt",E,E,1,[[["self"],[R[51]]],["bool"]]],[11,"le",E,E,1,[[["self"],[R[51]]],["bool"]]],[11,"gt",E,E,1,[[["self"],[R[51]]],["bool"]]],[11,"ge",E,E,1,[[["self"],[R[51]]],["bool"]]],[11,R[86],E,E,11,[[[R[87]],["self"]],[[R[22],[R[85]]],[R[85]]]]],[11,"lt",E,E,11,[[[R[87]],["self"]],["bool"]]],[11,"le",E,E,11,[[[R[87]],["self"]],["bool"]]],[11,"gt",E,E,11,[[[R[87]],["self"]],["bool"]]],[11,"ge",E,E,11,[[[R[87]],["self"]],["bool"]]],[11,R[86],E,E,12,[[[R[92]],["self"]],[[R[22],[R[85]]],[R[85]]]]],[11,R[86],E,E,6,[[[R[88]],["self"]],[[R[22],[R[85]]],[R[85]]]]],[11,R[86],E,E,13,[[["self"],[R[89]]],[[R[22],[R[85]]],[R[85]]]]],[11,"lt",E,E,13,[[["self"],[R[89]]],["bool"]]],[11,"le",E,E,13,[[["self"],[R[89]]],["bool"]]],[11,"gt",E,E,13,[[["self"],[R[89]]],["bool"]]],[11,"ge",E,E,13,[[["self"],[R[89]]],["bool"]]],[11,R[86],E,E,7,[[["self"],[R[26]]],[[R[22],[R[85]]],[R[85]]]]],[11,"lt",E,E,7,[[["self"],[R[26]]],["bool"]]],[11,"le",E,E,7,[[["self"],[R[26]]],["bool"]]],[11,"gt",E,E,7,[[["self"],[R[26]]],["bool"]]],[11,"ge",E,E,7,[[["self"],[R[26]]],["bool"]]],[11,R[86],E,E,4,[[[R[11]],["self"]],[[R[22],[R[85]]],[R[85]]]]],[11,R[86],E,E,9,[[[R[27]],["self"]],[[R[22],[R[85]]],[R[85]]]]],[11,"lt",E,E,9,[[[R[27]],["self"]],["bool"]]],[11,"le",E,E,9,[[[R[27]],["self"]],["bool"]]],[11,"gt",E,E,9,[[[R[27]],["self"]],["bool"]]],[11,"ge",E,E,9,[[[R[27]],["self"]],["bool"]]],[11,R[86],E,E,16,[[["self"],[R[90]]],[[R[22],[R[85]]],[R[85]]]]],[11,"lt",E,E,16,[[["self"],[R[90]]],["bool"]]],[11,"le",E,E,16,[[["self"],[R[90]]],["bool"]]],[11,"gt",E,E,16,[[["self"],[R[90]]],["bool"]]],[11,"ge",E,E,16,[[["self"],[R[90]]],["bool"]]],[11,R[86],E,E,8,[[[R[20]],["self"]],[[R[22],[R[85]]],[R[85]]]]],[11,R[91],E,E,0,[[],["self"]]],[11,R[91],E,E,1,[[],[R[51]]]],[11,R[91],E,E,11,[[],[R[87]]]],[11,R[91],E,E,12,[[],[R[92]]]],[11,R[91],E,E,6,[[],["self"]]],[11,R[91],E,E,15,[[],[R[94]]]],[11,R[91],E,"The default is `Always`",7,[[],[R[26]]]],[11,R[91],E,E,9,[[],[R[27]]]],[11,R[91],E,E,16,[[],[R[90]]]],[11,R[91],E,E,8,[[],["self"]]],[11,R[91],E,E,46,[[],[R[56]]]],[11,"eq",E,E,1,[[["self"],[R[51]]],["bool"]]],[11,"ne",E,E,1,[[["self"],[R[51]]],["bool"]]],[11,"eq",E,E,11,[[[R[87]],["self"]],["bool"]]],[11,"ne",E,E,11,[[[R[87]],["self"]],["bool"]]],[11,"eq",E,E,12,[[[R[92]],["self"]],["bool"]]],[11,"eq",E,E,6,[[[R[88]],["self"]],["bool"]]],[11,"eq",E,E,13,[[["self"],[R[89]]],["bool"]]],[11,"ne",E,E,13,[[["self"],[R[89]]],["bool"]]],[11,"eq",E,E,7,[[["self"],[R[26]]],["bool"]]],[11,"ne",E,E,7,[[["self"],[R[26]]],["bool"]]],[11,"eq",E,E,4,[[[R[11]],["self"]],["bool"]]],[11,"eq",E,E,9,[[[R[27]],["self"]],["bool"]]],[11,"ne",E,E,9,[[[R[27]],["self"]],["bool"]]],[11,"eq",E,E,16,[[["self"],[R[90]]],["bool"]]],[11,"ne",E,E,16,[[["self"],[R[90]]],["bool"]]],[11,"eq",E,E,8,[[[R[20]],["self"]],["bool"]]],[11,"from",E,E,2,[[[R[51]]],["argminslogkv"]]],[11,"clone",R[76],E,10,[[["self"]],[R[93]]]],[11,"clone",R[0],E,0,[[["self"]],[R[52]]]],[11,"clone",E,E,1,[[["self"]],[R[51]]]],[11,"clone",E,E,11,[[["self"]],[R[87]]]],[11,"clone",E,E,12,[[["self"]],[R[92]]]],[11,"clone",E,E,6,[[["self"]],[R[88]]]],[11,"clone",E,E,13,[[["self"]],[R[89]]]],[11,"clone",E,E,14,[[["self"]],["argminsloglogger"]]],[11,"clone",E,E,15,[[["self"]],[R[94]]]],[11,"clone",E,E,7,[[["self"]],[R[26]]]],[11,"clone",E,E,3,[[["self"]],[R[23]]]],[11,"clone",E,E,4,[[["self"]],[R[11]]]],[11,"clone",E,E,9,[[["self"]],[R[27]]]],[11,"clone",E,E,16,[[["self"]],[R[90]]]],[11,"clone",E,E,8,[[["self"]],[R[20]]]],[11,"clone",E,E,46,[[["self"]],[R[56]]]],[11,"cmp",E,E,1,[[["self"],[R[51]]],[R[85]]]],[11,"cmp",E,E,11,[[[R[87]],["self"]],[R[85]]]],[11,"cmp",E,E,12,[[[R[92]],["self"]],[R[85]]]],[11,"cmp",E,E,6,[[[R[88]],["self"]],[R[85]]]],[11,"cmp",E,E,13,[[["self"],[R[89]]],[R[85]]]],[11,"cmp",E,E,7,[[["self"],[R[26]]],[R[85]]]],[11,"cmp",E,E,4,[[[R[11]],["self"]],[R[85]]]],[11,"cmp",E,E,9,[[[R[27]],["self"]],[R[85]]]],[11,"cmp",E,E,16,[[["self"],[R[90]]],[R[85]]]],[11,"cmp",E,E,8,[[[R[20]],["self"]],[R[85]]]],[11,"extend",E,E,1,[[["self"],[R[95]]]]],[11,"fmt",E,E,5,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,1,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,11,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,12,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,4,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,9,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,8,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,5,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,0,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,1,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,11,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,12,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,6,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,13,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,7,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,3,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,9,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,16,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,8,[[[R[79]],["self"]],[R[25]]]],[11,"fmt",E,E,46,[[[R[79]],["self"]],[R[25]]]],[11,"hash",E,E,1,[[["self"],["__h"]]]],[11,"hash",E,E,11,[[["__htuhj"],["self"]]]],[11,"hash",E,E,12,[[["self"],["__h"]]]],[11,"hash",E,E,9,[[["self"],["__h"]]]],[11,"hash",E,E,16,[[["self"],["__h"]]]],[11,"hash",E,E,8,[[["self"],["__h"]]]],[11,"from_iter",E,E,1,[[[R[95]]],["self"]]],[11,R[96],R[76],E,10,[[["__s"],["self"]],[R[25]]]],[11,R[96],R[0],E,0,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,1,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,11,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,12,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,6,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,13,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,7,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,3,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,4,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,9,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,16,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,8,[[["__s"],["self"]],[R[25]]]],[11,R[96],E,E,46,[[["__s"],["self"]],[R[25]]]],[11,R[97],R[76],E,10,[[["__d"]],[R[25]]]],[11,R[97],R[0],E,0,[[["__d"]],[R[25]]]],[11,R[97],E,E,1,[[["__d"]],[R[25]]]],[11,R[97],E,E,11,[[["__d"]],[R[25]]]],[11,R[97],E,E,12,[[["__d"]],[R[25]]]],[11,R[97],E,E,6,[[["__d"]],[R[25]]]],[11,R[97],E,E,13,[[["__d"]],[R[25]]]],[11,R[97],E,E,7,[[["__d"]],[R[25]]]],[11,R[97],E,E,3,[[["__d"]],[R[25]]]],[11,R[97],E,E,4,[[["__d"]],[R[25]]]],[11,R[97],E,E,9,[[["__d"]],[R[25]]]],[11,R[97],E,E,16,[[["__d"]],[R[25]]]],[11,R[97],E,E,8,[[["__d"]],[R[25]]]],[11,R[96],E,E,2,[[["record"],[R[98]],["self"]],[R[25]]]],[11,R[96],E,E,0,[[["record"],[R[98]],["self"]],[R[25]]]],[11,"name",E,E,5,[[["self"]],[["str"],[R[22],["str"]]]]],[11,"cause",E,E,5,[[["self"]],[["fail"],[R[22],["fail"]]]]],[11,R[99],E,E,5,[[["self"]],[[R[99]],[R[22],[R[99]]]]]],[11,"from_boxed_compat",E,"Creates an `Error` from `Box<std::error::Error>`.",47,[[["box",["error"]],["error"]],["error"]]],[11,R[78],E,"Return a reference to the underlying failure that this…",47,[[["self"]],["fail"]]],[11,"name",E,"Returns the name of the underlying fail.",47,[[["self"]],[["str"],[R[22],["str"]]]]],[11,"cause",E,"Returns a reference to the underlying cause of this…",47,[[["self"]],["fail"]]],[11,R[99],E,"Gets a reference to the `Backtrace` for this `Error`.",47,[[["self"]],[R[99]]]],[11,"context",E,"Provides context for this `Error`.",47,[[["d"]],["context"]]],[11,"compat",E,"Wraps `Error` in a compatibility type.",47,[[],[["error"],["compat",["error"]]]]],[11,"downcast",E,R[100],47,[[],[[R[25],["error"]],["error"]]]],[11,"find_root_cause",E,"Returns the \"root cause\" of this error - the last value in…",47,[[["self"]],["fail"]]],[11,"iter_causes",E,"Returns a iterator over the causes of this error with the…",47,[[["self"]],["causes"]]],[11,"iter_chain",E,"Returns a iterator over all fails up the chain from the…",47,[[["self"]],["causes"]]],[11,"downcast_ref",E,R[100],47,[[["self"]],[[T],[R[22]]]]],[11,"downcast_mut",E,R[100],47,[[["self"]],[[R[22]],[T]]]],[11,"root_cause",E,"Deprecated alias to `find_root_cause`.",47,[[["self"]],["fail"]]],[11,"causes",E,"Deprecated alias to `iter_causes`.",47,[[["self"]],["causes"]]],[11,"new",R[31],E,17,[[["e"],["l"],["p"]],[R[32]]]],[11,R[101],E,R[102],19,[[["self"]],[R[32]]]],[11,R[103],E,R[104],20,[[["self"]],[R[32]]]],[11,R[105],E,R[106],21,[[["self"]],[R[32]]]],[11,R[82],R[0],R[107],40,[[["str"],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,R[81],E,R[108],40,[[[R[52]],["self"],[R[51]]],[["error"],[R[25],["error"]]]]],[11,"new",R[77],"Create a new empty `PerturbationVector`",23,[[],[R[80]]]],[11,"add",E,"Add an index `x_idx` and the corresponding function…",23,[[["vec",["usize"]],["usize"]],[R[80]]]]],"p":[[3,R[109]],[3,"ArgminKV"],[3,R[37]],[3,R[110]],[3,R[111]],[4,R[112]],[4,R[34]],[4,R[113]],[4,R[114]],[4,R[115]],[3,R[10]],[3,R[116]],[3,R[117]],[3,R[33]],[3,R[35]],[3,"Observer"],[3,R[118]],[3,R[119]],[8,R[120]],[8,R[121]],[8,R[122]],[8,R[123]],[8,R[124]],[3,R[125]],[8,R[126]],[8,R[127]],[8,R[128]],[8,R[129]],[8,R[130]],[8,R[131]],[8,R[132]],[8,R[133]],[8,R[134]],[8,R[135]],[8,R[136]],[8,R[137]],[8,R[138]],[8,R[139]],[8,R[140]],[8,R[141]],[8,"Observe"],[8,"ArgminOp"],[8,"Solver"],[8,R[142]],[8,R[143]],[8,R[144]],[3,R[145]],[3,"Error"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);