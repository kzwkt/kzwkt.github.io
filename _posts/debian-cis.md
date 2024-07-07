  https://github.com/ovh/debian-cis  

download deb from release https://github.com/ovh/debian-cis/releases  
https://github.com/ovh/debian-cis/releases/download/latest/cis-hardening.deb

sudo dpkg -i cis-hardening.deb
patch is not installable
sudo apt install -f

default debian 
sudo /opt/cis-hardening/bin/hardening.sh  --audit-all
 Total Available Checks : 243
         Total Runned Checks : 243
         Total Passed Checks : [ 130/243 ]
         Total Failed Checks : [ 113/243 ]
   Enabled Checks Percentage : 100.00 %
       Conformity Percentage : 53.49 %



  --set-hardening-level <level>
        Modifies the configuration to enable/disable tests given an hardening level,
        between 1 to 5. Don't run this if you have already customized the scripts
        enable/disable configurations.
        1: very basic policy, failure to pass tests at this level indicates severe
            misconfiguration of the machine that can have a huge security impact
        2: basic policy, some good practice rules that, once applied, shouldn't
            break anything on most systems
        3: best practices policy, passing all tests might need some configuration
            modifications (such as specific partitioning, etc.)
        4: high security policy, passing all tests might be time-consuming and
            require high adaptation of your workflow
        5: placebo, policy rules that might be very difficult to apply and maintain,
            with questionable security benefits

            
