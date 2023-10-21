export const tryCatch = (fn: Function) => {
  return (req: any, res: any) => {
    fn(req, res).catch((err: any) => {
      res(err, null);
    });
  };
};
