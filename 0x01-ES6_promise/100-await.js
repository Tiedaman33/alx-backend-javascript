import { uploadPhoto, createUser } from './utils';

/**
 * Handles uploading a photo and creating a user asynchronously.
 *
 * @returns {Promise<Object>} An object containing the photo and user data, or empty values in case of failure.
 */
export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  try {
    result.photo = await uploadPhoto();
  } catch (error) {
    result.photo = null;
  }

  try {
    result.user = await createUser();
  } catch (error) {
    result.user = null;
  }

  return result;
}
