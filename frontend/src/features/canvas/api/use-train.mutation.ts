import { useMutation } from '@tanstack/react-query';

import axiosInstance from '@shared/api/config/axios-instance';
import type { TrainRequest } from '@features/canvas/types/train.type';
import toast from 'react-hot-toast';

const startTrain = async (trainRequest: TrainRequest) => {
  await axiosInstance.post('/trains', trainRequest);
};

export const useStartTrain = () => {
  return useMutation({
    mutationFn: startTrain,
    onSuccess: () => {
      toast.success('학습을 요청했어요.');
    },
  });
};