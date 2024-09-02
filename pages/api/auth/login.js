import connectToDatabase from '../../../../../lib/mongodb';
import User from '../../../../../models/User';
import { comparePassword, signToken } from '../../../../../utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  await connectToDatabase();

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = signToken(user);

  res.status(200).json({ token, user: { email: user.email, role: user.role } });
}
