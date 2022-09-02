export const config = {
    username: 'postgres',
    password: "udagram3dev",
    database: 'udagram3dev',
    host: 'udagram3dev.couibe9saibd.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    'aws_region': process.env.AWS_REGION,
    'aws_profile': process.env.AWS_PROFILE,
    'aws_media_bucket': process.env.AWS_BUCKET,
    'aws_secret_key': process.env.AWS_SECRET_KEY,
    'aws_access_key': process.env.AWS_ACCESS_KEY,
    'url': process.env.URL,
    'jwt': {
      'secret': process.env.JWT_SECRET,
    },
  };
  