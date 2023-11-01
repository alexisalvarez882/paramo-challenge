const ObjectRequestClient = require("../api/object_request");
const Client = require("../api/client");
expect = require('chai').expect

let objectRequest;

beforeAll(async () => {
    const client = new Client();
    objectRequest = new ObjectRequestClient(client);
});

/**
 * Test Cases.
 */
describe("Games Tests", () => {
    jest.setTimeout(30000)

    it("Get all games successfully", async () => {
        const attributes = {page: 0, perPage:25, dates:["2018-10-17", "2018-10-21"], seasons: [2018], teamIds: [1], postSeason: false, startDate: '2018-10-01', endDate: '2018-10-30'}
        let response = await objectRequest.getAllGames(attributes);

        // specific test validations
        expect(response.status).to.equal(200)
        expect(response.body).to.not.equal({});
        expect(response.body.data[0].id).to.be.a('number')
        expect(response.body.data[0].date).to.includes('2018-10-17')
        expect(response.body.data[0].home_team.id).to.be.a('number')
        expect(response.body.data[0].home_team.abbreviation).to.be.a('string')
        expect(response.body.data[0].home_team.city).to.be.a('string')
        expect(response.body.data[0].home_team.conference).to.be.a('string')
        expect(response.body.data[0].home_team.division).to.be.a('string')
        expect(response.body.data[0].home_team.full_name).to.be.a('string')
        expect(response.body.data[0].home_team.name).to.be.a('string')
        expect(response.body.data[0].home_team_score).to.be.a('number')
        expect(response.body.data[0].period).to.be.a('number')
        expect(response.body.data[0].postseason).to.equal(false);
        expect(response.body.data[0].season).to.equal(2018);
        expect(response.body.data[0].status).to.be.a('string')
        expect(response.body.data[0].visitor_team.id).to.be.a('number')
        expect(response.body.data[0].visitor_team.abbreviation).to.be.a('string')
        expect(response.body.data[0].visitor_team.city).to.be.a('string')
        expect(response.body.data[0].visitor_team.conference).to.be.a('string')
        expect(response.body.data[0].visitor_team.division).to.be.a('string')
        expect(response.body.data[0].visitor_team.full_name).to.be.a('string')
        expect(response.body.data[0].visitor_team.name).to.be.a('string')
        expect(response.body.data[0].visitor_team_score).to.be.a('number')
    });
    it("Get a specific game successfully", async () => {
        let response = await objectRequest.getSpecificGame(1);

        // specific test validations
        expect(response.status).to.equal(200)
        expect(response.body).to.not.equal({});
        expect(response.body.id).to.be.a('number')
        expect(response.body.date).to.be.a('string')
        expect(response.body.home_team.id).to.be.a('number')
        expect(response.body.home_team.abbreviation).to.be.a('string')
        expect(response.body.home_team.city).to.be.a('string')
        expect(response.body.home_team.conference).to.be.a('string')
        expect(response.body.home_team.division).to.be.a('string')
        expect(response.body.home_team.full_name).to.be.a('string')
        expect(response.body.home_team.name).to.be.a('string')
        expect(response.body.home_team_score).to.be.a('number')
        expect(response.body.period).to.be.a('number')
        expect(response.body.postseason).to.equal(false);
        expect(response.body.season).to.equal(2018);
        expect(response.body.status).to.be.a('string')
        expect(response.body.visitor_team.id).to.be.a('number')
        expect(response.body.visitor_team.abbreviation).to.be.a('string')
        expect(response.body.visitor_team.city).to.be.a('string')
        expect(response.body.visitor_team.conference).to.be.a('string')
        expect(response.body.visitor_team.division).to.be.a('string')
        expect(response.body.visitor_team.full_name).to.be.a('string')
        expect(response.body.visitor_team.name).to.be.a('string')
        expect(response.body.visitor_team_score).to.be.a('number')
    });
    it("Get a specific game with a wrong id", async () => {
        let response = await objectRequest.getSpecificGame('a');

        // specific test validations
        expect(response.status).to.equal(404)
        expect(response.body.error).to.equal('Not Found');
    });
    it("Get a specific game with no id", async () => {
        let response = await objectRequest.getSpecificGame('');

        // specific test validations
        expect(response.status).to.equal(200)
        expect(response.body.data.length).to.be.greaterThan(1);
    });
    it("Get all games with page and per_page attributes in zero value", async () => {
        const attributes = {page: 0, perPage:0, dates:["2018-10-17", "2018-10-21"], seasons: [2018], teamIds: [1], postSeason: false, startDate: '2018-10-01', endDate: '2018-10-30'}
        let response = await objectRequest.getAllGames(attributes);

        // specific test validations
        expect(response.status).to.equal(500)
        expect(response.body.error).to.equal('Internal Server Error')
    });
    it("Get all games with a wrong date format", async () => {
        const attributes = {page: 0, perPage:25, dates:["17-10-2018"], seasons: [2018], teamIds: [1], postSeason: false, startDate: '10-01-2018', endDate: '30-10-2018'}
        let response = await objectRequest.getAllGames(attributes);

        // specific test validations
        expect(response.status).to.equal(500)
        expect(response.body.error).to.equal('Internal Server Error')
    });
    it("Get all games with a wrong team id", async () => {
        const attributes = {page: 0, perPage:25, dates:["2018-10-17", "2018-10-21"], seasons: [2018], teamIds: ['aaa'], postSeason: false, startDate: '2018-10-01', endDate: '2018-10-30'}
        let response = await objectRequest.getAllGames(attributes);

        // specific test validations
        expect(response.status).to.equal(500)
        expect(response.body.error).to.equal('Internal Server Error')
    });
    it("Get all games with an empty team_ids array", async () => {
        const attributes = {page: 0, perPage:25, dates:["2018-10-17", "2018-10-21"], seasons: [2018], teamIds: [], postSeason: false, startDate: '2018-10-01', endDate: '2018-10-30'}
        let response = await objectRequest.getAllGames(attributes);

        // specific test validations
        expect(response.status).to.equal(500)
        expect(response.body.error).to.equal('Internal Server Error')
    });
    it("Get all games with no start date", async () => {
        const attributes = {page: 0, perPage:25, dates:["2018-10-17", "2018-10-21"], seasons: [2018], teamIds: [1], postSeason: false, startDate: '', endDate: '2018-10-30'}
        let response = await objectRequest.getAllGames(attributes);

        // specific test validations
        expect(response.status).to.equal(500)
        expect(response.body.error).to.equal('Internal Server Error')
    });
    it("Get all games with no end date", async () => {
        const attributes = {page: 0, perPage:25, dates:["2018-10-17", "2018-10-21"], seasons: [2018], teamIds: [1], postSeason: false, startDate: '2018-10-01', endDate: ''}
        let response = await objectRequest.getAllGames(attributes);

        // specific test validations
        expect(response.status).to.equal(500)
        expect(response.body.error).to.equal('Internal Server Error')
    });
});
