import { test, expect } from "@playwright/test";

test.skip("Get user details using api", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  let responseJson = await response.json();
  console.log(responseJson);

  expect(response.status()).toBe(201);
  expect(responseJson.data[0].first_name).toBe("Michael");
});

//################################################################################

let userId;
test("Create user using Post api", async ({ request }) => {
  let user = {
    name: "Playwright",
    job: "Udemy",
  };

  const response = await request.post("https://reqres.in/api/users", {
    data: user,
    headers: { ACCEPT: "applications/JSON" },
  });

  let responseJson = await response.json();
  expect(response.status()).toBe(201);
  expect(responseJson.name).toBe(`${user.name}`);
  expect(responseJson.job).toBe(`${user.job}`);
  userId = responseJson.id;
  console.log(userId);
});

//################################################################################

test("Update user using Put api", async ({ request }) => {
  let user = {
    name: "automation",
    job: "course",
  };

  const response = await request.put(`https://reqres.in/api/users/${userId}`, {
    data: user,
    headers: { ACCEPT: "applications/JSON" },
  });

  let responseJson = await response.json();
  console.log(responseJson);

  expect(response.status()).toBe(200);
  expect(responseJson.name).toBe(`${user.name}`);
  expect(responseJson.job).toBe(`${user.job}`);
  userId = responseJson.id;
});

//################################################################################

test("Delete user using Delete api", async ({ request }) => {
  // no request body beeded!
  const response = await request.delete(
    `https://reqres.in/api/users/${userId}`
  );
  expect(response.status()).toBe(204);

  const response2 = await request.get(`https://reqres.in/api/users/${userId}`);

  // it should print an empty Json
  console.log(await response2.json());
});
