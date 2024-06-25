# Sending email with Nodejs and EmailJs



## Installation


```bash
npm install
```

## Usage
Sending Post request to http://localhost:3000/mail

```python
{
  "text":"Hello World",
  "subject":"Hello Subject",
  "emails":[
    {
      "name":"John Doe",
      "email":"johndoe@gmail.com"
    },
    {
      "name":"John Foo",
      "email":"johnfoo@gmail.com"
    }
    ],
    "emailsCopy":[
      {
        "name": "sums",
        "email":"sums@mgil.com"
      }
      ],
      "from":{
        "name":"Sums Doe",
        "email":"sumsdoe@mysite.com"
      }
}
```

## Todo

Rename .env.exemple to .env and
replace all env variable with right values

## License

[MIT](https://choosealicense.com/licenses/mit/)