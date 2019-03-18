const { ApolloServer, gql } = require('apollo-server');

const persons = [
    {
      "name": "Nielsen Vinson",
      "company": "TETAK",
      "address": "197 Hopkins Street, Dola, Mississippi, 8858",
      "about": "Dolor ex in cillum irure consequat ea eiusmod ut ex non. Irure cupidatat commodo sunt esse. Eu Lorem excepteur est et occaecat duis minim est deserunt in nisi nisi sint non.\r\n"
    },
    {
      "name": "Shaw James",
      "company": "TROPOLI",
      "address": "441 Ruby Street, Valle, Wisconsin, 2447",
      "about": "Sunt in est deserunt culpa cillum non aute mollit officia qui cillum nulla quis incididunt. Cupidatat in ea Lorem magna elit et non velit enim. Adipisicing do eiusmod eu culpa in anim consequat sunt aliqua aliquip do aliquip.\r\n"
    },
    {
      "name": "Kellie Clay",
      "company": "ROCKYARD",
      "address": "145 Sharon Street, Downsville, South Dakota, 3840",
      "about": "Ex labore labore magna culpa sunt sint labore nulla velit cillum occaecat ullamco consequat eu. Tempor amet et occaecat esse officia Lorem cupidatat aliqua adipisicing et id incididunt cillum laboris. Sit irure reprehenderit reprehenderit pariatur qui cillum est aliqua consectetur duis labore voluptate esse. Ea aute labore quis fugiat fugiat. Proident ut do veniam reprehenderit. Incididunt pariatur culpa dolore qui elit veniam.\r\n"
    }
];

const typeDefs = gql`
    type Person {
        name: String,
        company: String,
        address: String,
        about: String
    }

    type Query {
        persons: [Person]
    }
`;

const resolvers = {
    Query: {
        persons: () => persons
    }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
