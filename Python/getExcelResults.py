import requests

# Define the necessary parameters
access_token = "<your_access_token>"
file_url = "<file_url>"

# Set up the HTTP headers
headers = {
    "Authorization": "Bearer " + access_token
}

# Make the GET request to retrieve the file
response = requests.get(file_url, headers=headers)

# Check the response status code
if response.status_code == 200:
    # File retrieval successful
    file_data = response.content
    # Process the file data as needed
else:
    # File retrieval failed
    print("Error: Failed to retrieve the file. Status code:", response.status_code)
