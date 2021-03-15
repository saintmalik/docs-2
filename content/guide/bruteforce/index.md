---
title: "Guide to securing app against Bruteforce"
tags: ["Bruteforce", "Lockout", "Security"]
description: "This is a tutorial for bruteforce lockout."
---
# Bruteforce Lockout


The Brute Force Lockout feature allows you to restrict account access based on failed login attempts. Once the limit of failed login attempts is reached, the customer will either get suspended for the configured period or prompted to complete an additional security step to log in.

To set up Brute Force Lockout, login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account, from the left navigation panel, click Security and then navigate to the Brute Force Lockout section.

Click the down arrow or anywhere within the section, the Brute Force Lockout screen will appear:


![alt_text](/images/main.png "image_tooltip")

Enter or select the following configuration details:

1. **Brute Force Lockout Threshold:** Set the desired maximum number of failed login attempts.

2. **Lockout Type:** Select the lockout type you wish to trigger when the threshold limit is reached. The following screen displays the available lockout type options:


![alt_text](/mages/lockout-type.png "image_tooltip")

3. **Suspend:** Select this option to prevent the customer from logging in for a specified amount of time (Suspend Effective Period), once the account is suspended.

    * **Suspend Effective Period:** The effective period for which the account is suspended. Default suspend effective period is 900 seconds.

4. **Captcha:** Select this option to prompt the customer to complete a CAPTCHA to log in when the maximum failed login attempt is reached.

    * Pre-requisites: You must have Google reCAPTCHA V2 configured in your LoginRadius Identity Platform to display captcha on lockout.