//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const path = require("path");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    CLOUDINARY_ID: `v1679224512`,
    CLOUDINARY_FOLDER: `interview-prep`,
    JWT_SECRET: "djhfghbdsgrasklkajsdgf",
    SENDGRID_KEY:
      "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",
    CLOUDINARY_URL:
      `https://api.cloudinary.com/v1_1/cloudinary999/image/upload`,
    CLOUDINARY_VIDEO_URL:
      "https://api.cloudinary.com/v1_1/cloudinary999/video/upload",
    STRIPE_SECRET_KEY: "sk_test_51MeyZQSII06WieIt7mqZ9iKqwyliqU15dvopcYqYCnNCL9TuhbrHHQVUoB0EfZcFzRy5QHdMeAhfENxATe3IecCG00euDDMHfj",
    STRIPE_PUBLISHABLE_KEY:
      "pk_test_51MeyZQSII06WieIttSr6RZvHgfLIMBP8nENfYgWW2ISVHTJSglS6SsDLxPx0Sx9NzzmUt310LP2NleNjinTJL9o100aJUyWLSr",
  },
  experimental:{
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../')
  }
};

module.exports = withNx(nextConfig);
