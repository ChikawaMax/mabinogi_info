interface TradeProperty {
  id: {
    number: number;
  };
  location: {
    select: {
      name: string;
    };
  };
  item: {
    title: {
      plain_text: string;
    }[];
  };
  item_quantity: {
    number: number;
  };
  material: {
    rich_text: {
      plain_text: string;
    }[];
  };
  material_quantity: {
    number: number;
  };
  skill: {
    rich_text: {
      plain_text: string;
    }[];
  };
}

export interface TradeObj {
  properties: TradeProperty;
}

export interface CalcObj {
  index1: number;
  index2: number;
  index3: number;
  calc1: string;
  calc2: string;
  text: string;
}

export interface cromOBJ {
  id: number;
  level: string;
  room1: { color: string; info: string };
  room2: { color: string; info: string };
  room3: { color: string; info: string };
  room4: { color: string; info: string };
  room5: { color: string; info: string };
  room6: { color: string; info: string };
  room7: { color: string; info: string };
  room8: { color: string; info: string };
  room9?: { color: string; info: string };
}
