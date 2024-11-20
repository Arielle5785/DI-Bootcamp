import requests
import random
import json


def get_countries():
    url = 'https://restcountries.com/v3.1/all'  # API endpoint
    response = requests.get(url)
    if response.status_code == 200:  # request is successfull
        data = response.json()
        return data
    else:
        print('Failed to get the data.')


def get_random_countries(data):
    return random.sample(data, k=10)


def extract_attributes(countries):
    extracted = []
    for country in countries:
        extracted.append({
            'name': country.get('name', {}).get('common', 'Unknown'),
            'capital': country.get('capital', ['Unknown'])[0],
            'flag': country.get('flag', {}),
            'subregion': country.get('subregion', 'Unknown'),
            'population': int(country.get('population', 0))
        })
    return extracted


def save_to_json(data):
    with open('C:\\Users\\hello\\Documents\\DI-Bootcamp\\Week3\\Day4\\DailyChallenge\\countries.json', 'w') as file:
        json.dump(data, file, indent=4)
    print('Data saved to countries.json')


if __name__ == '__main__':
    all_countries = get_countries()
    if all_countries:
        random_countries = get_random_countries(all_countries)
        country_data = extract_attributes(random_countries)
        save_to_json(country_data)
