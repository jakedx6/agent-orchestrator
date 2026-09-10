import { useEffect } from "react";
import { FileContentPane } from "./FileContentPane";
import type { FileViewMode } from "./FileContentPane";
import type { FileAnnotationModel } from "./WorkspaceDiffView";
import type { WorkspaceDiffScope } from "../hooks/useSessionWorkspaceFiles";

export function SessionFileWorkspace({
	annotation,
	commitSha,
	initialEditing = false,
	initialMode = "file",
	initialRequestKey = 0,
	onInitialEditingConsumed,
	path,
	sessionId,
	split,
	scope = "combined",
}: {
	annotation: FileAnnotationModel;
	commitSha?: string;
	initialEditing?: boolean;
	initialMode?: FileViewMode;
	initialRequestKey?: number;
	onInitialEditingConsumed?: (path: string, requestKey: number) => void;
	path: string;
	sessionId: string;
	split: boolean;
	scope?: WorkspaceDiffScope;
}) {
	useEffect(
		() => () => {
			if (initialEditing) onInitialEditingConsumed?.(path, initialRequestKey);
		},
		[initialEditing, initialRequestKey, onInitialEditingConsumed, path],
	);

	return (
		<section className="flex h-full min-h-0 flex-col bg-background" data-testid="session-file-workspace">
			<div className="board-scrollbar min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain">
				<FileContentPane
					annotation={annotation}
					commitSha={commitSha}
					initialEditing={initialEditing}
					initialMode={initialMode}
					initialRequestKey={initialRequestKey}
					path={path}
					sessionId={sessionId}
					split={split}
					scope={scope}
				/>
			</div>
		</section>
	);
}
