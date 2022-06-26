import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sytkh62q0w01wbeako8mwm/master',
  headers: {
    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxMDk3MTksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNHN5dGtoNjJxMHcwMXdiZWFrbzhtd20vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjBiNWQ0Y2EtNjFjOS00MjBkLWJiNzQtMDRmNzUzNjRkMDRlIiwianRpIjoiY2w0dDB5dHo3MnU2NjAxejM5bWFlYXhrdSJ9.ei92tNjvqK5n7ahoh7b3MQowpWj799t4g_wTPJrS3OoH_CkT9rNO_6xmLbzUBABCxR6dYf--cHvcnCuHUkqvB7ja2103j4tRfQXFXMz2pDTo24RGea9-N1sbhjnkNCM1IM-oCeceeO8MxTRuBzERArAp7p6Ld5mN7rkzAog1bdbFfonAswF2aJ6yBRjJWKMeG5WkByNDeKYHPzXJuu_1btC6h2ZHaSKkKdyuIcYu8vnHfFYEDYg7Ct8Rf-kjqbp90BLzf6XWYsZK-ouqq11n0EZRM_MsJcDnbfOl8HbxfOf50v-L5zlQvYrQtAIfpWQK63JrD5omh_P237AqYSzjefHc8vX20LVdM74JVfBdSKNXXBr6A7yNm9ic59r_MLwaRIKcAA1iGLCIT3ILxGnt1c-BQkOr64X59D-xHeywUhhk44I-3Ok8hG_EbktWQ7OD4G1VVNdGwAIaTNDqpLNVRLT0ZC1CqENnsN3CHQm2ykAE7sKHZawrFFpPLOec1010VrobOPHORBQ8G2gaO2st6GZ4_jZtE2OnVVQjJ-PNOpn62DHGJSn1N4kc6_cxMCU-OzEChFrjZQVOOG0wq-bZF1oC7TjzXHcX67cYuYVWVxWvg52uYVEjopwrqWD3C-ODgs_zJ6ie4v-P6L7LR7Bl1dnkbB6MArjWc7I_9tc98FE`
  },

  cache: new InMemoryCache()
})