type TemplateVariables = Record<string, string | number>;

export const TEMPLATES = {
  WELCOME: {
    subject: (vars: TemplateVariables) => `Welcome ${vars.name}!`,
    body: (vars: TemplateVariables) => `
      <!DOCTYPE html>
      <html>
        <body>
          <h1>Welcome to Our Platform</h1>
          <p>Dear ${vars.name},</p>
          <p>Thank you for joining! Your account has $${vars.credits} credits.</p>
        </body>
      </html>
    `
  },
  PROMOTION: {
    subject: (vars: TemplateVariables) => `Special Offer: ${vars.offer}`,
    body: (vars: TemplateVariables) => `
      <!DOCTYPE html>
      <html>
        <body>
          <h1>Limited Time Offer</h1>
          <p>Get ${vars.discount}% off on ${vars.product}!</p>
          <a href="${vars.link}">Redeem Now</a>
        </body>
      </html>
    `
  }
};