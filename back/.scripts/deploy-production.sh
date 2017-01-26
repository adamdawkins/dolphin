env_vars=""; for i (`cat .production-env`) env_vars+="-e $i ";
meteor-now $env_vars
