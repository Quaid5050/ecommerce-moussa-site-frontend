'use server';

import { signIn } from '@/auth';
import { handleExistingAccessToken } from '@/lib/auth/utils';

// doSocialLogin function
export async function doSocialLogin(formData: any) {
  const action = formData.get('action');
  await signIn(action, {
    redirectTo: '/',
  });
  console.log(action);
}
// TODO: Need to implement this function in client side as well
export async function doLogout() {
  await handleExistingAccessToken();
  // await signOut({
  //   redirect:false,
  //   // redirectTo: '/',
  // });
}
