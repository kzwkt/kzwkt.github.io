got to ~/.xdm-app-data/Data/*.state  

cat dec.py 
```
import os
import re

# Define the pattern to extract the segment number
pattern = re.compile(r'seg-(\d+)-v1-a1\.ts')

# Get the current working directory
current_directory = os.getcwd()

# List to hold tuples of (segment_number, filename)
files_with_segments = []

# Iterate through files in the current directory
for filename in os.listdir(current_directory):
    match = pattern.search(filename)
    if match:
        # Extract the segment number as an integer
        segment_number = int(match.group(1))
        # Add the tuple (segment_number, filename) to the list
        files_with_segments.append((segment_number, filename))

# Sort the list by the segment number (numerical sort)
files_with_segments.sort(key=lambda x: x[0])

# Open the filelist.txt for writing
with open('filelist.txt', 'w') as filelist:
    for _, filename in files_with_segments:
        filelist.write(f"file '{filename}'\n")
```
python dec.py    

check if filelist is random--sorted_number_1_to_xxx-v1-a1.ts  

 ```   
 ffmpeg -f concat -safe 0 -i filelist.txt  -c copy output.mp4
```
