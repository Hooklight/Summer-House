#!/bin/bash

# Deploy all Summer House sites to Netlify
# This script handles site creation and deployment

echo "🚀 Starting deployment of all Summer House sites..."

# Array of sites to deploy
sites=(
  "summerhousemedspa:Summer House Aesthetics Main Site"
  "dallasprescriptionweightloss:Dallas Prescription Weight Loss"
  "dallasfiller:Dallas Dermal Fillers"
  "glp1weightlossdallas:GLP-1 Weight Loss Dallas"
  "pillglp1:Oral GLP-1 Pills"
  "glp1pilldallas:GLP-1 Pill Dallas"
  "oralweightlossdallas:Oral Weight Loss Dallas"
  "retatrutidedallas:Retatrutide Dallas"
  "dallasretatrutide:Dallas Retatrutide"
)

# Create results file
results_file="deployment-results.txt"
echo "# Netlify Deployment Results - $(date)" > "$results_file"
echo "" >> "$results_file"

# Deploy each site
for site_info in "${sites[@]}"; do
  IFS=':' read -r folder_name site_title <<< "$site_info"

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📦 Deploying: $site_title"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  cd "/Users/JohnSimon_1/summer-house-domains/$folder_name"

  # Initialize netlify if not already done
  if [ ! -f ".netlify/state.json" ]; then
    echo "  ⚡ Creating new Netlify site..."
    # Use API to create site (non-interactive)
    netlify api createSite --data "{\"name\":\"$folder_name\"}" > site_creation.json 2>&1
  fi

  echo "  🔄 Deploying to production..."
  deploy_output=$(netlify deploy --prod --dir . --message "Initial deployment of $site_title" 2>&1)
  deploy_status=$?

  if [ $deploy_status -eq 0 ]; then
    # Extract URL from deployment output
    url=$(echo "$deploy_output" | grep -oE 'https://[a-zA-Z0-9-]+\.netlify\.app' | head -1)
    if [ -z "$url" ]; then
      url=$(echo "$deploy_output" | grep "Website URL" | awk '{print $NF}')
    fi

    echo "  ✅ Success!"
    echo "  🌐 URL: $url"
    echo ""
    echo "## $site_title" >> "$results_file"
    echo "- Folder: $folder_name" >> "$results_file"
    echo "- URL: $url" >> "$results_file"
    echo "- Status: ✅ Deployed" >> "$results_file"
    echo "" >> "$results_file"
  else
    echo "  ❌ Deployment failed"
    echo "  Error: $deploy_output"
    echo ""
    echo "## $site_title" >> "$results_file"
    echo "- Folder: $folder_name" >> "$results_file"
    echo "- Status: ❌ Failed" >> "$results_file"
    echo "- Error: See console output" >> "$results_file"
    echo "" >> "$results_file"
  fi

  # Small delay between deployments
  sleep 2
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Deployment complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📄 Results saved to: $results_file"
echo ""
cat "$results_file"
