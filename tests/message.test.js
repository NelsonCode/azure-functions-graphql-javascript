const { gql } = require("apollo-server-azure-functions");
const { server } = require("../graphql/server");

test("fetch message", async () => {
  const GET_HELLO = gql`
    query {
      hello
    }
  `;
  const response = await server.executeOperation({
    query: GET_HELLO,
  });

  expect(response.data).toEqual({ hello: "Hello world!" });
});
