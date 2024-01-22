import { make_approve_blog } from 'src/api/index';
import { useMutation, useQuery } from 'react-query';
import toast from 'react-hot-toast';

const useHandleApprove = (id) => {
  const { data, status, error } = useMutation({
    queryKey: [`approve${id}`],
    queryFn: () => make_approve_blog(id),
  });

  if (status === 'success') {
    toast.success('Successfully make Approve');
  } else if (status === 'error') {
    toast.error('Error');
  }

  return { data, status, error };
};

export default useHandleApprove;
