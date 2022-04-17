import * as C from "./styled";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categorioes";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumns>{formatDate(item.date)}</C.TableColumns>
      <C.TableColumns>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumns>
      <C.TableColumns>{item.title}</C.TableColumns>
      <C.TableColumns>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
          R${item.value}
        </C.Value>
      </C.TableColumns>
    </C.TableLine>
  );
};
