import { FETCH_BIBLE_TEXT } from "../action.type";
import { SET_BIBLE_TEXT, SET_ERROR } from "../mutations.type";
import Verse from "@/services/Verse";
import Bible from "@/services/Bible";

export default {
  async [FETCH_BIBLE_TEXT]({ commit }) {
    try {
      const verses = await new Verse(new Bible()).getBibleText();
      commit(SET_BIBLE_TEXT, verses);
    } catch (e) {
      commit(SET_ERROR, { type: "API service", message: e.message });
    }
  }
};
