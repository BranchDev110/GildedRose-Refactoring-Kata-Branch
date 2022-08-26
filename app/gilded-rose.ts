export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const updatedItems: Item[] = this.items.map((item: Item) => {
      let updatedItem: Item = item;
      if (updatedItem.name != 'Aged Brie' && updatedItem.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (updatedItem.quality > 0) {
          if (updatedItem.name != 'Sulfuras, Hand of Ragnaros') {
            updatedItem.quality = updatedItem.quality - 1;
            if(updatedItem.name == "Conjured Mana Cake" && updatedItem.quality > 0)
              updatedItem.quality = updatedItem.quality - 1;
          }
        }
      } else {
        if (updatedItem.quality < 50) {
          updatedItem.quality = updatedItem.quality + 1
          if (updatedItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (updatedItem.sellIn < 11) {
              if (updatedItem.quality < 50) {
                updatedItem.quality = updatedItem.quality + 1
              }
            }
            if (updatedItem.sellIn < 6) {
              if (updatedItem.quality < 50) {
                updatedItem.quality = updatedItem.quality + 1
              }
            }
          }
        }
      }
      if (updatedItem.name != 'Sulfuras, Hand of Ragnaros') {
        updatedItem.sellIn = updatedItem.sellIn - 1;
      }
      if (updatedItem.sellIn < 0) {
        if (updatedItem.name != 'Aged Brie') {
          if (updatedItem.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (updatedItem.quality > 0) {
              if (updatedItem.name != 'Sulfuras, Hand of Ragnaros') {
                updatedItem.quality = updatedItem.quality - 1
              }
            }
          } else {
            updatedItem.quality = updatedItem.quality - updatedItem.quality
          }
        } else {
          if (updatedItem.quality < 50) {
            updatedItem.quality = updatedItem.quality + 1
          }
        }
      }
      return updatedItem;
    })

    this.items = [...updatedItems];
    return this.items;
  }
}
