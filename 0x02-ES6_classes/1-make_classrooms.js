import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom objects with predefined sizes.
 * @returns {ClassRoom[]} Array of ClassRoom objects.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
