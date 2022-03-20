import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '../models';

/**
 * - Scale In
 * @param option
 * @returns
 */
export function scaleIn(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'scaleIn', [
    state('void', style({ opacity: 0.8, transform: 'scale(0.2)' })),
    transition(':enter', [animate('{{duration}}ms {{timing}}')], {
      params: { timing, duration },
    }),
  ]);
}
