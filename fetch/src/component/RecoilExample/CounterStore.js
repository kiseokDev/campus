import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState", // unique Id (with respect to other atoms/selectors)
  default: "", //initial Value
});

export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
