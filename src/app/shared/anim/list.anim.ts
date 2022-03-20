import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '../models';

/**
 * - List Animation
 * @param option
 * @returns
 */
export function listAnimation(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger('listAnimation', [
    transition(
      ':enter',
      [
        query(
          '*',
          [
            style({ transform: 'translateY(-100%)' }),
            stagger(200, [animate('400ms')]),
          ],
          { optional: true }
        ),
      ],
      {
        params: { delay, timing, duration },
      }
    ),
  ]);
}
