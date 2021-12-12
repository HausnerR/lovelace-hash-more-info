# lovelace-hash-more-info
Lovelace addon for displaying entity details based on url hash value

## Installation
1. Copy module file `hash-more-info.js` to your Home Assistant `config/www` folder
2. Add to your lovelace resources:
```
- url: '/local/hash-more-info.js'
  type: module
```

## Usage
Now you can enter your dashboard using url like this one:
`https://your_home_assistant_installation.com/lovelace/example_dashboard#light.example`

When dashboard loads, it's automatically open `light.example` entity details.
It's extremly useful when you want for example open entity details in Home Assistant companion app using notification commands.