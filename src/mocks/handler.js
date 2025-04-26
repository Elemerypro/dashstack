import { http, HttpResponse } from "msw";
import cardsData from "./get-cards-data.json";

const handlers = [
  http.get("/api/data", () => {
    return HttpResponse.json({
      data: cardsData,
    });
  }),
];

export default handlers;
