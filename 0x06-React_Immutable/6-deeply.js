import { Map } from "./node_modules/immutable/dist/immutable";

export const mergeDeeplyElements = (page1, page2) => Map(page1).mergeDeep(Map(page2));
