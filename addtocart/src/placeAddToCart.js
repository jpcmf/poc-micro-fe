import { render } from 'solid-js/web';
import AddToCart from './AddToCart';

export default function placeAddToCart(element, id) {
  render(() => <AddToCart id={id} />, element);
}
