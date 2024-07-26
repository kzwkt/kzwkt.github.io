
fix malformed xml for boomerang xp svg
find ~/.icons/Windows-XP-master/scalable{actions,categories,emblems,notifications,status,apps,devices,mimetypes,places} -type f -name '*.svg' -exec sed -i 's/<svg /<svg xmlns="http:\/\/www.w3.org\/2000\/svg" xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" /' {} +


cat revw 
find . -type f -name "* *" | while IFS= read -r file; do
    newfile=$(echo "$file" | sed 's/ /_/g')
    mv "$file" "$newfile"
done

