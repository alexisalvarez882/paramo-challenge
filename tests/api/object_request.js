const API_PATH = "/api/v1"
/**
 * Request client to validate Objects.
 */
class ObjectRequest {

  constructor(client) {
    this.client = client;
  }

  /**
   * Method to get all the games.
   * @param attributes Object with attributes page, perPage, dates, seasons, teamIds, postSeason, startDate and endDate
   * @returns {Promise<*>}
   */
  async getAllGames(attributes) {
    //The dates, seasons and teamIds arrays are formatted to send it correctly through the endpoint
    const dates = attributes.dates.toString().replace("[", '').replace("]", '');
    const seasons = attributes.seasons.toString().replace("[", '').replace("]", '');
    const teamIds = attributes.teamIds.toString().replace("[", '').replace("]", '');

    return await this.client.request
        .get(API_PATH + "/games")
        .query({'page': attributes.page})
        .query({'per_page': attributes.perPage})
        .query('dates[]=' +dates)
        .query('seasons[]=' +seasons)
        .query('team_ids[]=' +teamIds)
        .query({'postseason': attributes.postSeason})
        .query({'start_date': attributes.startDate})
        .query({'end_date': attributes.endDate})
        .send();
  }

  /**
   * Method to get a specific game response
   * @param gameId -> Game ID
   * @returns {Promise<*>}
   */
  async getSpecificGame(gameId) {
    return await this.client.request.get(API_PATH + "/games/" + gameId).send();
  }
}

module.exports = ObjectRequest;
