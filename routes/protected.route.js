const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const ProtectedRoute = express.Router();

// Apply authentication middleware to ensure route is protected
ProtectedRoute.use(auth);

/**
 * @swagger
 * tags:
 *   name: Protected
 *   description: Endpoints that require authentication
 */

/**
 * @swagger
 * /protected/:
 *  get:
 *    summary: Access protected route
 *    tags: [Protected]
 *    security:
 *      - BearerAuth: []
 *    responses:
 *      200:
 *        description: User authenticated successfully
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                Message:
 *                  type: string
 *                  description: User authenticated
 *                  default: User authenticated
 *      401:
 *        description: Unauthorized or invalid token
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                Message:
 *                  type: string
 *                  description: Unauthorized or invalid token
 *                  default: Unauthorized or invalid token
 */
ProtectedRoute.get("/", (req, res) => {
  try {
    // This route is protected by the auth middleware, so if we reach here, user is authenticated
    res.status(200).json({ Message: "User authenticated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Server Error" });
  }
});

module.exports = {
  ProtectedRoute,
};
