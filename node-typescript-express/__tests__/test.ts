import request from "supertest";
import app, { appServer } from "../src/index";

describe("route tests", () => {
    afterAll(() => {
        appServer.close();
    });

    it("get home route GET /", done => {
        return request(app)
            .get("/api")
            .then(response => {
                expect(response.body).toEqual({
                    version: "0.3.0"
                });
                done();
            });
    });
});