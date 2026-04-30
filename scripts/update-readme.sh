#!/bin/bash

# Define the base directory relative to the script location
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
README_PATH="$BASE_DIR/README.md"

# Define categories (Display Name:Folder Name)
CATEGORIES=(
    "Algorithms:algorithms"
    "Databases:databases"
    "Shell:shell"
    "JavaScript:javascript"
)

clean_title() {
    local filename="$1"
    # Strip the extension
    local name="${filename%.*}"
    
    # Remove leading numbers and a dash if any (e.g., 175-combine-two-tables -> combine-two-tables)
    name=$(echo "$name" | sed -E 's/^[0-9]+-//')
    
    # Replace dashes with spaces
    name=$(echo "$name" | tr '-' ' ')
    
    # Capitalize each word (Title Case)
    echo "$name" | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1'
}

uri_encode() {
    local string="$1"
    # Replace spaces with %20 for Markdown links
    echo "${string// /%20}"
}

# Start writing README
echo "# LeetCode Solutions" > "$README_PATH"
echo "" >> "$README_PATH"
echo "This project contains solutions to LeetCode problems, organized into LeetCode's main categories: Algorithms, Databases, Shell, and JavaScript." >> "$README_PATH"
echo "" >> "$README_PATH"

for cat_info in "${CATEGORIES[@]}"; do
    cat_name="${cat_info%%:*}"
    folder_name="${cat_info##*:}"
    folder_path="$BASE_DIR/$folder_name"
    
    # Skip if directory does not exist
    if [ ! -d "$folder_path" ]; then
        continue
    fi
    
    # Read files into an array, handling filenames with spaces correctly
    files=()
    while IFS= read -r file; do
        # Ignore empty lines
        [ -n "$file" ] && files+=("$file")
    done < <(find "$folder_path" -maxdepth 1 -type f -exec basename {} \; | sort)
    
    # Skip if folder is empty
    if [ ${#files[@]} -eq 0 ]; then
        continue
    fi
    
    echo "## $cat_name" >> "$README_PATH"
    echo "" >> "$README_PATH"
    echo "| Problem Title | Solution |" >> "$README_PATH"
    echo "| ------------- | -------- |" >> "$README_PATH"
    
    for file in "${files[@]}"; do
        title=$(clean_title "$file")
        encoded_file=$(uri_encode "$file")
        echo "| $title | [link](./$folder_name/$encoded_file) |" >> "$README_PATH"
    done
    
    echo "" >> "$README_PATH"
done

echo "Feel free to explore the solutions and contribute to the repository." >> "$README_PATH"
echo "" >> "$README_PATH"

echo "README.md updated successfully."
