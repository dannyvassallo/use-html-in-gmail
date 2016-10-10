#Use Node to Embed HTML in Gmail

###Getting Started

```shell
git clone https://github.com/dannyvassallo/use-html-in-gmail
cd use-html-in-gmail
npm install
```

Duplicate `.env.example` and rename it `.env`.

Change the information inside to meet your specifications.

Create a `recipients.txt` file.

Structure it like this:

```shell
email1@gmail.com
email2@yahoo.com
email3@hotmail.com
```

Save it.

run `npm start` to send emails.

On the first attempt you may be blocked by gmail. Open the email they send you.

It should look like this:

![security](https://s3.amazonaws.com/tsm-signature/security.png)

Click the link highlighted in the image.

Update the following option:

![Alt text](https://s3.amazonaws.com/tsm-signature/options.png)

Your email should now send.

You can change the email template by altering `template.html`

REMEMBER: YOU MUST USE INLINE STYLES IN YOUR TEMPLATE.

You can use [this tool](http://templates.mailchimp.com/resources/inline-css/) to create your template, and paste it's contents
into the `template.html` file.
