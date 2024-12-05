export class JwtPayload {
  subjectId   :   string  = '';
  role        :   string  = '';
  iat?        :   number;
  exp?        :   number;
};
