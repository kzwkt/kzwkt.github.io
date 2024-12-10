```
cat </dev/tcp/time.nist.gov/13

60654 24-12-10 08:19:07 00 0 0 816.6 UTC(NIST) * 

nist time
13 : tcp/udp  : Daytime Protocol (RFC 867):
37 : tcp : Time Protocol (RFC 868) 32 bit unix time
123 : udp : Network Time Protocol (NTP, RFC 5905) 


bash timescew.sh

nist_response=$(cat </dev/tcp/time.nist.gov/13)
nist_timestamp=$(echo $nist_response | awk '{print $2 " " $3}')
nist_unix_time=$(date --date="$nist_timestamp UTC" +%s)
system_time=$(date +%s)
skew=$((system_time - nist_unix_time))


# Output the results
echo "System time: $system_time (Unix timestamp)"
echo "NIST time: $nist_unix_time (Unix timestamp)"
echo "Time skew (offset): $skew ms"


# we could get accuracy up to ms using %s%3N but network pings might be in ms 
```
