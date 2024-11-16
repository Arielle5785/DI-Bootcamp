
import requests
import time


def measure_load_time(url):
    '''
    Measures the amount of time it takes to load a webpage.
    Parameters: url (str): The URL of the webpage to measure.
    Returns: float: The time in seconds(rounded to 3 decimals) it took to load the webpage.
    '''

    try:
        # Record the start time
        start_time = time.time()
        # Send a GET request to the URL
        response = requests.get(url)
        # Record the end time
        end_time = time.time()
        # Calculate load time
        load_time = end_time - start_time
        # Return load time if request was successful
        if response.status_code == 200:
            return round(load_time, 3)
        else:
            return f"Error: Received status code {response.status_code}"

    except requests.exceptions.RequestException as e:
        return f"Error: {e}"


# Test the function with multiple websites
urls = ["https://www.google.com",
        "https://www.ynet.co.il", "https://www.imdb.com"]
for url in urls:
    print(f"Loading {url} took {measure_load_time(url)} seconds")
