module.exports = {
  /**
   * The user's email address, which is their unique login
   */
  email: {
    type: String,
    index: true,
  },

  /**
   * A name by which we can address the user
   */
  name: {
    type: String,
  },

  /**
   * The user password, encrypted
   */
  password: {
    type: String,
    required: true,
  },


  /**
  * A user's unique Github profile ID
  */
  githubId: {
    type: String,
    index: true,
  },

  /**
   * A user's Github OAuth Token
   */
  githubToken: {
    type: String,
  },
};
