#!/bin/bash

cat words.txt | tr '[:upper:]' '[:lower:]' > temp.txt

sed -e 's/[^[:alpha:]]/ /g' temp.txt > temp2.txt

readarray -t words < temp2.txt

declare -A word_count
for word in "${words[@]}"
do
    if [[ -z "${word_count[$word]}" ]]; then
        word_count[$word]=1
    else
        ((word_count[$word]++))
    fi
done

for word in "${!word_count[@]}"
do
    echo "$word ${word_count[$word]}"
done

rm temp.txt temp2.txt