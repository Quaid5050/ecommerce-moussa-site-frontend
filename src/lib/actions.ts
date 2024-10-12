'use server';

import { signIn, signOut } from '@/auth';
import { handleExistingAccessToken } from '@/lib/auth/utils';

// doSocialLogin function
export async function doSocialLogin(formData: any) {
  const action = formData.get('action');
  await signIn(action, {
    redirectTo: '/',
  });
  console.log(action);
}

export async function doLogout() {
  await handleExistingAccessToken();
  await signOut({
    redirectTo: '/products',
  });
}
