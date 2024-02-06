export const genVerifyEmailOTPTemplate = (username: string, otp: number) =>
  `<!doctypehtml><meta charset=utf-8><meta content="ie=edge"http-equiv=x-ua-compatible><title>Verify your Email</title><meta content="width=device-width,initial-scale=1"name=viewport><style>@media screen{@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:400;src:local("Source Sans Pro Regular"),local("SourceSansPro-Regular"),url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:700;src:local("Source Sans Pro Bold"),local("SourceSansPro-Bold"),url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format("woff")}}a,body,table,td{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}img,table{-ms-interpolation-mode:bicubic}a[x-apple-data-detectors]{font-family:inherit!important;font-size:inherit!important;font-weight:inherit!important;line-height:inherit!important;color:inherit!important;text-decoration:none!important}div[style*="margin: 16px 0;"]{margin:0!important}body{width:100%!important;height:100%!important;padding:0!important;margin:0!important}table{border-collapse:collapse!important}a{color:#1a82e2}img{height:auto;line-height:100%;text-decoration:none;border:0;outline:0}</style><body style=background-color:#e9ecef><div style=display:none;max-width:0;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#fff;opacity:0 class=preheader>Here is your OTP to verify your email ${otp}. This OTP is valid for 5 minutes for security concerns</div><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td align=center bgcolor=#e9ecef><!--[if (gte mso 9)|(IE)]><table border=0 cellpadding=0 cellspacing=0 width=600 align=center><tr><td align=center valign=top width=600><![endif]--><table border=0 cellpadding=0 cellspacing=0 width=100% style=max-width:600px><tr><td align=center style="padding:36px 24px;background-color:#090c14"valign=top><a href=https://movielust.store style=display:inline-block target=_blank><img alt=Logo border=0 src=https://www.movielust.in/favicons/android-icon-144x144.png style=display:block;width:80px;max-width:80px;min-width:48px width=48></a></table><!--[if (gte mso 9)|(IE)]><![endif]--><tr><td align=center bgcolor=#e9ecef><!--[if (gte mso 9)|(IE)]><table border=0 cellpadding=0 cellspacing=0 width=600 align=center><tr><td align=center valign=top width=600><![endif]--><table border=0 cellpadding=0 cellspacing=0 width=100% style=max-width:600px><tr><td align=left style="padding:36px 24px 0;font-family:'Source Sans Pro',Helvetica,Arial,sans-serif;border-top:3px solid #d4dadf"bgcolor=#ffffff><h1 style=margin:0;font-size:32px;font-weight:700;letter-spacing:-1px;line-height:48px>Verify your email</h1></table><!--[if (gte mso 9)|(IE)]><![endif]--><tr><td align=center bgcolor=#e9ecef><!--[if (gte mso 9)|(IE)]><table border=0 cellpadding=0 cellspacing=0 width=600 align=center><tr><td align=center valign=top width=600><![endif]--><table border=0 cellpadding=0 cellspacing=0 width=100% style=max-width:600px><tr><td align=left style="padding:24px;font-family:'Source Sans Pro',Helvetica,Arial,sans-serif;font-size:16px;line-height:24px"bgcolor=#ffffff><p style=margin:0>Hi ${username},<br>We have received a request to verify your email for your movielust account. Enter the below OTP to verify the email.<tr><td align=left bgcolor=#ffffff><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td align=center style=padding:12px bgcolor=#ffffff><table border=0 cellpadding=0 cellspacing=0><tr><td align=center style=border-radius:6px bgcolor=#1a82e2><span style="display:inline-block;padding:16px 36px;font-family:'Source Sans Pro',Helvetica,Arial,sans-serif;font-size:32px;font-weight:800;color:#fff;text-decoration:none;border-radius:6px;letter-spacing:12px">${otp}</span></table></table><tr><td align=left style="padding:24px;font-family:'Source Sans Pro',Helvetica,Arial,sans-serif;font-size:16px;line-height:24px"bgcolor=#ffffff><p style=margin:0>If you did not request email verification please ignore this email.</table><!--[if (gte mso 9)|(IE)]><![endif]--></table><!--[if (gte mso 9)|(IE)]><![endif]--><div style=padding:0;background-color:transparent class=u-row-container><div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#111114"class=u-row><div style=border-collapse:collapse;display:table;width:100%;background-color:transparent><!--[if (mso)|(IE)]><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td align=center style=padding:0;background-color:transparent><table border=0 cellpadding=0 cellspacing=0 style=width:600px><tr style=background-color:#111114><![endif]--><!--[if (mso)|(IE)]><td align=center style="width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"valign=top width=600><![endif]--><div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top class="u-col u-col-100"><div style=width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0><!--[if (!mso)&(!IE)]><!--><div style="padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table border=0 cellpadding=0 cellspacing=0 width=100% style=font-family:Montserrat,sans-serif role=presentation><tr><td align=left style="overflow-wrap:break-word;word-break:break-word;padding:32px 10px 0;font-family:Montserrat,sans-serif"class=v-container-padding-padding><div style=color:#fff;line-height:140%;text-align:center;word-wrap:break-word><p style=font-size:14px;line-height:140%><span style=font-size:18px;line-height:25.2px><strong>Movielust</strong></span></div></table><table border=0 cellpadding=0 cellspacing=0 width=100% style=font-family:Montserrat,sans-serif role=presentation><tr><td align=left style=overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:Montserrat,sans-serif class=v-container-padding-padding><div style=color:#b0b1b4;line-height:180%;text-align:center;word-wrap:break-word><p style=font-size:14px;line-height:180%>India<p style=font-size:14px;line-height:180%>support@movielust.in</div></table><table border=0 cellpadding=0 cellspacing=0 width=100% style=font-family:Montserrat,sans-serif role=presentation><tr><td align=left style=overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:Montserrat,sans-serif class=v-container-padding-padding><div align=center><div style=display:table;max-width:211px><!--[if (mso)|(IE)]><table border=0 cellpadding=0 cellspacing=0 width=211><tr><td align=center style=border-collapse:collapse><table border=0 cellpadding=0 cellspacing=0 width=100% style=border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:211px><tr><![endif]--><!--[if (mso)|(IE)]><td style=width:32px;padding-right:21px valign=top width=32><![endif]--><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></table><table border=0 cellpadding=0 cellspacing=0 width=100% style=font-family:Montserrat,sans-serif role=presentation><tr><td align=left style=overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:Montserrat,sans-serif class=v-container-padding-padding><table border=0 cellpadding=0 cellspacing=0 width=82% style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;border-top:1px solid #9495a7;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"align=center height=0px><tr style=vertical-align:top><td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top;font-size:0;line-height:0;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%><span></span></table></table><table border=0 cellpadding=0 cellspacing=0 width=100% style=font-family:Montserrat,sans-serif role=presentation><tr><td align=left style="overflow-wrap:break-word;word-break:break-word;padding:0 10px 13px;font-family:Montserrat,sans-serif"class=v-container-padding-padding><div style=color:#b0b1b4;line-height:180%;text-align:center;word-wrap:break-word><p style=font-size:14px;line-height:180%>© 2022 All Rights Reserved</div></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--><tr><td align=center style=padding:24px bgcolor=#e9ecef><!--[if (gte mso 9)|(IE)]><table border=0 cellpadding=0 cellspacing=0 width=600 align=center><tr><td align=center valign=top width=600><![endif]--><table border=0 cellpadding=0 cellspacing=0 width=100% style=max-width:600px><tr><td align=center style="padding:12px 24px;font-family:'Source Sans Pro',Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#666"bgcolor=#e9ecef><p style=margin:0>You received this email because we received a email verification request for your account. If you didn't request to verify email you can safely delete this email.</table><!--[if (gte mso 9)|(IE)]><![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><!--[if (mso)|(IE)]><![endif]-->`;