<wizard-report>
# PostHog post-wizard report

The wizard completed a full PostHog integration for the Lingua language learning app. It installed `posthog-react-native` and its Expo peer dependencies, configured environment variables, created a PostHog client singleton at `src/lib/posthog.ts`, wrapped the root layout with `PostHogProvider` (with touch autocapture and manual screen tracking via `posthog.screen()`), and added event capture and user identification calls across the five key screens of the app.

| Event name | Description | File |
|---|---|---|
| `onboarding_get_started_tapped` | User taps the Get Started button on the onboarding screen, entering the sign-up funnel. | `src/app/onboarding.tsx` |
| `user_signed_up` | User successfully creates an account and completes email verification. | `src/app/sign-up.tsx` |
| `user_signed_in` | Returning user successfully authenticates via email code. | `src/app/sign-in.tsx` |
| `sign_in_failed` | Sign-in attempt fails, capturing the error message for monitoring. | `src/app/sign-in.tsx` |
| `sign_up_failed` | Sign-up attempt fails, capturing the error message for monitoring. | `src/app/sign-up.tsx` |
| `language_selected` | User confirms their chosen learning language after the language selection screen. | `src/app/language-select.tsx` |
| `lesson_continued` | User taps Continue on the home screen card to resume their current lesson. | `src/app/(tabs)/home.tsx` |
| `daily_plan_item_tapped` | User taps an item in today's learning plan on the home screen. | `src/app/(tabs)/home.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/208693/dashboard/770390)
- [New Signups & Sign-ins](https://eu.posthog.com/project/208693/insights/ii4X5q4S)
- [Onboarding → Signup → Language Selection funnel](https://eu.posthog.com/project/208693/insights/YlRuJKE2)
- [Daily Lesson Engagement](https://eu.posthog.com/project/208693/insights/r4qO9HA3)
- [Auth Error Rate](https://eu.posthog.com/project/208693/insights/8jbcx8xW)
- [Language Popularity](https://eu.posthog.com/project/208693/insights/kFB2gaud)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN` and `EXPO_PUBLIC_POSTHOG_HOST` to `.env.example` and any CI/CD secrets configuration so collaborators know what to set.
- [ ] Confirm the returning-visitor path also calls `identify` — a handler that only identifies on fresh login can leave returning sessions on anonymous distinct IDs. Consider calling `posthog.identify()` in `InitialLayout` when the user is already signed in via Clerk's `useAuth`.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
