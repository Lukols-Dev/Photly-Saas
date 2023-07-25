const express = require("express");
const { route } = require("express/lib/application");

const {
  addNewContact,
  getContactById,
  getAllContacts,
  deleteContact,
} = require("../controllers/contact.controllers");

const routes = express.Router();

//route for add new contact
routes.route("/messages").post(addNewContact).get(getAllContacts);

routes.route("/message/:id").get(getContactById);

routes.route("/messages/id").delete(deleteContact);

module.exports = {
  routes: routes,
};

/**
 * @swagger
 * components:
 *  schemas:
 *    Contact:
 *      type: object
 *      required:
 *        - first_name
 *        - email
 *        - category_photo
 *        - city
 *        - street
 *        - date
 *        - time
 *        - message
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the contact
 *        first_name:
 *          type: string
 *          description: The new client first name
 *        email:
 *          type: string
 *          description: The new client email
 *        category_photo:
 *          type: string
 *          description: The photography category (wedding)
 *        city:
 *          type: string
 *          description: The city in which it takes place
 *        street:
 *          type: string
 *          description: The street in which it takes place
 *        date:
 *          type: string
 *          description: The date of the meeting
 *        time:
 *          type: string
 *          description: The time of the meeting
 *        message:
 *          type: string
 *          description: Contact details
 *      example:
 *          id: 0
 *          first_name: John Dell
 *          email: john.dell@gmail.com
 *          category_photo: wedding
 *          city: Warsaw
 *          street: street 54
 *          date: 12/12/2022
 *          time: 9:00
 *          message: Hello it is test message
 */

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: The contact managing API
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Returns the list of all the contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: The list of the contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get the contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact id
 *     responses:
 *       200:
 *         description: The contact description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       404:
 *         description: The contact was not found
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: The contact was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /contacts/{id}:
 *  put:
 *    summary: Update the contact by the id
 *    tags: [Contacts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The contact id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Contact'
 *    responses:
 *      200:
 *        description: The contact was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Contact'
 *      404:
 *        description: The contact was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /contact/{id}:
 *   delete:
 *     summary: Remove the contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact id
 *
 *     responses:
 *       200:
 *         description: The contact was deleted
 *       404:
 *         description: The contact was not found
 */
