class Contact {
  constructor(
    first_name,
    email,
    category_photo,
    city,
    street,
    date,
    time,
    message
  ) {
    this.firstName = first_name;
    this.email = email;
    this.category_photo = category_photo;
    this.city = city;
    this.street = street;
    this.date = date;
    this.time = time;
    this.message = message;
  }
}

module.exports = Contact;
